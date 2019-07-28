import Layout from '../components/layout'

const Grid = () => (
  <Layout>
    <main>
      <div className='container'>
        <h1>Grid system</h1>
        <h2>Auto-layout columns</h2>
        <h3>Equal-width</h3>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col'>1 of 2</div>
              <div className='col'>2 of 2</div>
            </div>
            <div className='row'>
              <div className='col'>1 of 3</div>
              <div className='col'>2 of 3</div>
              <div className='col'>3 of 3</div>
            </div>
          </div>
        </div>

        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col'>Column</div>
              <div className='col'>Column</div>
              <div className='w-100' />
              <div className='col'>Column</div>
              <div className='col'>Column</div>
            </div>
          </div>
        </div>

        <h3>Setting one column width</h3>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col'>1 of 3</div>
              <div className='col' style={{ '--col': 6 }}>
                2 of 3 (wider)
              </div>
              <div className='col'>3 of 3</div>
            </div>
            <div className='row'>
              <div className='col'>1 of 3</div>
              <div className='col' style={{ '--col': 5 }}>
                2 of 3 (wider)
              </div>
              <div className='col'>3 of 3</div>
            </div>
          </div>
        </div>

        <h3>Variable width content</h3>
        <div className='example'>
          <div className='container'>
            <div className='row justify-content-md-center'>
              <div className='col' style={{ '--col-lg': 2 }}>
                1 of 3
              </div>
              <div className='col-md-auto'>Variable width content</div>
              <div className='col' style={{ '--col-lg': 2 }}>
                3 of 3
              </div>
            </div>
            <div className='row'>
              <div className='col'>1 of 3</div>
              <div className='col-md-auto'>Variable width content</div>
              <div className='col' style={{ '--col-lg': 2 }}>
                3 of 3
              </div>
            </div>
          </div>
        </div>

        <h2>Responsive</h2>
        <h3>All breakpoints</h3>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col'>col</div>
              <div className='col'>col</div>
              <div className='col'>col</div>
              <div className='col'>col</div>
            </div>
            <div className='row'>
              <div className='col' style={{ '--col': 8 }}>
                col-8
              </div>
              <div className='col' style={{ '--col': 4 }}>
                col-4
              </div>
            </div>
          </div>
        </div>

        <h3>Stacked to horizontal</h3>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm' style={{ '--col-sm': 8 }}>
                col-sm-8
              </div>
              <div className='col-sm' style={{ '--col-sm': 4 }}>
                col-sm-4
              </div>
            </div>
            <div className='row'>
              <div className='col-sm'>col-sm</div>
              <div className='col-sm'>col-sm</div>
              <div className='col-sm'>col-sm</div>
            </div>
          </div>
        </div>

        <h3>Mix and match</h3>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col' style={{ '--col': 12, '--col-md': 8 }}>
                .col-12 .col-md-8
              </div>
              <div className='col' style={{ '--col': 6, '--col-md': 4 }}>
                .col-6 .col-md-4
              </div>
            </div>

            <div className='row'>
              <div className='col' style={{ '--col': 6, '--col-md': 4 }}>
                .col-6 .col-md-4
              </div>
              <div className='col' style={{ '--col': 6, '--col-md': 4 }}>
                .col-6 .col-md-4
              </div>
              <div className='col' style={{ '--col': 6, '--col-md': 4 }}>
                .col-6 .col-md-4
              </div>
            </div>

            <div className='row'>
              <div className='col-6'>.col-6</div>
              <div className='col-6'>.col-6</div>
            </div>
          </div>
        </div>

        <h3>Gutters</h3>
        <div className='example'>
          <div className='container px-lg-5'>
            <div className='row mx-lg-n5'>
              <div className='col' style={{ '--grid-gutter-width': '15px' }}>
                Custom column padding
              </div>
              <div className='col' style={{ '--grid-gutter-width': '5px' }}>
                Custom column padding
              </div>
            </div>
          </div>
        </div>

        <h2>Alignment</h2>
        <h3>Vertical alignment</h3>
        <div className='example'>
          <div className='container'>
            <div className='row align' style={{ alignItems: 'start' }}>
              <div className='col'>One of three columns</div>
              <div className='col'>One of three columns</div>
              <div className='col'>One of three columns</div>
            </div>
            <div className='row align' style={{ alignItems: 'center' }}>
              <div className='col'>One of three columns</div>
              <div className='col'>One of three columns</div>
              <div className='col'>One of three columns</div>
            </div>
            <div className='row align' style={{ alignItems: 'end' }}>
              <div className='col'>One of three columns</div>
              <div className='col'>One of three columns</div>
              <div className='col'>One of three columns</div>
            </div>
          </div>
        </div>
        <div className='example'>
          <div className='container'>
            <div className='row align'>
              <div className='col' style={{ '--align-self': 'start' }}>
                One of three columns
              </div>
              <div className='col' style={{ '--align-self': 'center' }}>
                One of three columns
              </div>
              <div className='col' style={{ '--align-self': 'end' }}>
                One of three columns
              </div>
            </div>
          </div>
        </div>

        <h3>Horizontal alignment</h3>
        <div className='example'>
          <div className='container'>
            <div className='row' style={{ '--justify-content': 'start' }}>
              <div className='col' style={{ '--col': 4 }}>
                One of two columns
              </div>
              <div className='col' style={{ '--col': 4 }}>
                One of two columns
              </div>
            </div>
            <div className='row' style={{ '--justify-content': 'center' }}>
              <div className='col' style={{ '--col': 4 }}>
                One of two columns
              </div>
              <div className='col' style={{ '--col': 4 }}>
                One of two columns
              </div>
            </div>
            <div className='row' style={{ '--justify-content': 'end' }}>
              <div className='col' style={{ '--col': 4 }}>
                One of two columns
              </div>
              <div className='col' style={{ '--col': 4 }}>
                One of two columns
              </div>
            </div>
            <div
              className='row'
              style={{ '--justify-content': 'space-around' }}
            >
              <div className='col' style={{ '--col': 4 }}>
                One of two columns
              </div>
              <div className='col' style={{ '--col': 4 }}>
                One of two columns
              </div>
            </div>
            <div
              className='row'
              style={{ '--justify-content': 'space-between' }}
            >
              <div className='col' style={{ '--col': 4 }}>
                One of two columns
              </div>
              <div className='col' style={{ '--col': 4 }}>
                One of two columns
              </div>
            </div>
          </div>
        </div>

        <h3>No gutters</h3>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col' style={{ '--grid-gutter-width': 0 }}>
                Custom column padding
              </div>
              <div className='col' style={{ '--grid-gutter-width': 0 }}>
                Custom column padding
              </div>
            </div>
          </div>
        </div>

        <h3>Column wrapping</h3>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col' style={{ '--col': 9 }}>
                .col-9
              </div>
              <div className='col' style={{ '--col': 4 }}>
                .col-4
                <br />
                Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped
                onto a new line as one contiguous unit.
              </div>
              <div className='col' style={{ '--col': 6 }}>
                .col-6
                <br />
                Subsequent columns continue along the new line.
              </div>
            </div>
          </div>
        </div>

        <h3>Column breaks</h3>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col' style={{ '--col': 6, '--col-sm': 3 }}>
                .col-6 .col-sm-3
              </div>
              <div className='col' style={{ '--col': 6, '--col-sm': 3 }}>
                .col-6 .col-sm-3
              </div>

              <div className='w-100' />

              <div className='col' style={{ '--col': 6, '--col-sm': 3 }}>
                .col-6 .col-sm-3
              </div>
              <div className='col' style={{ '--col': 6, '--col-sm': 3 }}>
                .col-6 .col-sm-3
              </div>
            </div>
          </div>
        </div>

        <h2>Reordering</h2>
        <h3>Order</h3>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col'>First, but unordered</div>
              <div className='col' style={{ '--column-order': 12 }}>
                Second, but last
              </div>
              <div className='col' style={{ '--column-order': 1 }}>
                Third, but first
              </div>
            </div>
          </div>
        </div>

        <h3>Offsetting columns</h3>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col-md' style={{ '--col-md': 4 }}>
                .col-md-4
              </div>
              <div
                className='col-md'
                style={{ '--col-md': 4, '--offset-sm': 4 }}
              >
                .col-md-4 .offset-md-4
              </div>
            </div>
            <div className='row'>
              <div
                className='col-md'
                style={{ '--col-md': 3, '--offset-md': 3 }}
              >
                .col-md-3 .offset-md-3
              </div>
              <div
                className='col-md'
                style={{ '--col-md': 3, '--offset-md': 3 }}
              >
                .col-md-3 .offset-md-3
              </div>
            </div>
            <div className='row'>
              <div
                className='col-md'
                style={{ '--col-md': 6, '--offset-md': 3 }}
              >
                .col-md-6 .offset-md-3
              </div>
            </div>
          </div>
        </div>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm' style={{ '--col-sm': 5, '--col-md': 6 }}>
                .col-sm-5 .col-md-6
              </div>
              <div
                className='col-sm'
                style={{
                  '--col-sm': 5,
                  '--offset-sm': 2,
                  '--col-md': 6,
                  '--offset-md': 0
                }}
              >
                .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
              </div>
            </div>
            <div className='row'>
              <div
                className='col-sm'
                style={{ '--col-sm': 6, '--col-md': 5, '--col-lg': 6 }}
              >
                .col-sm-6 .col-md-5 .col-lg-6
              </div>
              <div
                className='col-sm'
                style={{
                  '--col-sm': 6,
                  '--col-md': 5,
                  '--offset-md': 2,
                  '--col-lg': 6,
                  '--offset-lg': 0
                }}
              >
                .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
              </div>
            </div>
          </div>
        </div>

        <h3>Margin utilities</h3>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col-md' style={{ '--col-md': 4 }}>
                .col-md-4
              </div>
              <div className='col-md ml-auto' style={{ '--col-md': 4 }}>
                .col-md-4 .ml-auto
              </div>
            </div>
            <div className='row'>
              <div className='col-md ml-md-auto' style={{ '--col-md': 3 }}>
                .col-md-3 .ml-md-auto
              </div>
              <div className='col-md ml-md-auto' style={{ '--col-md': 3 }}>
                .col-md-3 .ml-md-auto
              </div>
            </div>
            <div className='row'>
              <div className='col-auto mr-auto'>.col-auto .mr-auto</div>
              <div className='col-auto'>.col-auto</div>
            </div>
          </div>
        </div>

        <h2>Nesting</h2>
        <div className='example'>
          <div className='container'>
            <div className='row'>
              <div className='col' style={{ '--col-sm': 9 }}>
                Level 1: .col-sm-9
                <div className='row'>
                  <div className='col' style={{ '--col': 8, '--col-sm': 6 }}>
                    Level 2: .col-8 .col-sm-6
                  </div>
                  <div className='col' style={{ '--col': 4, '--col-sm': 6 }}>
                    Level 2: .col-4 .col-sm-6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default Grid
