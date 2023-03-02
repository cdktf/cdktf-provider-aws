# `wafGeoMatchSet` Submodule <a name="`wafGeoMatchSet` Submodule" id="@cdktf/provider-aws.wafGeoMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafGeoMatchSet <a name="WafGeoMatchSet" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set aws_waf_geo_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafgeomatchset"

wafgeomatchset.NewWafGeoMatchSet(scope Construct, id *string, config WafGeoMatchSetConfig) WafGeoMatchSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig">WafGeoMatchSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig">WafGeoMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.putGeoMatchConstraint">PutGeoMatchConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.resetGeoMatchConstraint">ResetGeoMatchConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGeoMatchConstraint` <a name="PutGeoMatchConstraint" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.putGeoMatchConstraint"></a>

```go
func PutGeoMatchConstraint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.putGeoMatchConstraint.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGeoMatchConstraint` <a name="ResetGeoMatchConstraint" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.resetGeoMatchConstraint"></a>

```go
func ResetGeoMatchConstraint()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafgeomatchset"

wafgeomatchset.WafGeoMatchSet_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafgeomatchset"

wafgeomatchset.WafGeoMatchSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafgeomatchset"

wafgeomatchset.WafGeoMatchSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.geoMatchConstraint">GeoMatchConstraint</a></code> | <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList">WafGeoMatchSetGeoMatchConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.geoMatchConstraintInput">GeoMatchConstraintInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `GeoMatchConstraint`<sup>Required</sup> <a name="GeoMatchConstraint" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.geoMatchConstraint"></a>

```go
func GeoMatchConstraint() WafGeoMatchSetGeoMatchConstraintList
```

- *Type:* <a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList">WafGeoMatchSetGeoMatchConstraintList</a>

---

##### `GeoMatchConstraintInput`<sup>Optional</sup> <a name="GeoMatchConstraintInput" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.geoMatchConstraintInput"></a>

```go
func GeoMatchConstraintInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafGeoMatchSetConfig <a name="WafGeoMatchSetConfig" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafgeomatchset"

&wafgeomatchset.WafGeoMatchSetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	GeoMatchConstraint: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set#name WafGeoMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.geoMatchConstraint">GeoMatchConstraint</a></code> | <code>interface{}</code> | geo_match_constraint block. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set#id WafGeoMatchSet#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set#name WafGeoMatchSet#name}.

---

##### `GeoMatchConstraint`<sup>Optional</sup> <a name="GeoMatchConstraint" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.geoMatchConstraint"></a>

```go
GeoMatchConstraint interface{}
```

- *Type:* interface{}

geo_match_constraint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set#geo_match_constraint WafGeoMatchSet#geo_match_constraint}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set#id WafGeoMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WafGeoMatchSetGeoMatchConstraint <a name="WafGeoMatchSetGeoMatchConstraint" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafgeomatchset"

&wafgeomatchset.WafGeoMatchSetGeoMatchConstraint {
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraint.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set#type WafGeoMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraint.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set#value WafGeoMatchSet#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraint.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set#type WafGeoMatchSet#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraint.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set#value WafGeoMatchSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafGeoMatchSetGeoMatchConstraintList <a name="WafGeoMatchSetGeoMatchConstraintList" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafgeomatchset"

wafgeomatchset.NewWafGeoMatchSetGeoMatchConstraintList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafGeoMatchSetGeoMatchConstraintList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.get"></a>

```go
func Get(index *f64) WafGeoMatchSetGeoMatchConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafGeoMatchSetGeoMatchConstraintOutputReference <a name="WafGeoMatchSetGeoMatchConstraintOutputReference" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafgeomatchset"

wafgeomatchset.NewWafGeoMatchSetGeoMatchConstraintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafGeoMatchSetGeoMatchConstraintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafGeoMatchSet.WafGeoMatchSetGeoMatchConstraintOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



