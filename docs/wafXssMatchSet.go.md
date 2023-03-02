# `wafXssMatchSet` Submodule <a name="`wafXssMatchSet` Submodule" id="@cdktf/provider-aws.wafXssMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafXssMatchSet <a name="WafXssMatchSet" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set aws_waf_xss_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafxssmatchset"

wafxssmatchset.NewWafXssMatchSet(scope Construct, id *string, config WafXssMatchSetConfig) WafXssMatchSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig">WafXssMatchSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig">WafXssMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.putXssMatchTuples">PutXssMatchTuples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.resetXssMatchTuples">ResetXssMatchTuples</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutXssMatchTuples` <a name="PutXssMatchTuples" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.putXssMatchTuples"></a>

```go
func PutXssMatchTuples(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.putXssMatchTuples.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.resetId"></a>

```go
func ResetId()
```

##### `ResetXssMatchTuples` <a name="ResetXssMatchTuples" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.resetXssMatchTuples"></a>

```go
func ResetXssMatchTuples()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafxssmatchset"

wafxssmatchset.WafXssMatchSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafxssmatchset"

wafxssmatchset.WafXssMatchSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafxssmatchset"

wafxssmatchset.WafXssMatchSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.xssMatchTuples">XssMatchTuples</a></code> | <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList">WafXssMatchSetXssMatchTuplesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.xssMatchTuplesInput">XssMatchTuplesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `XssMatchTuples`<sup>Required</sup> <a name="XssMatchTuples" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.xssMatchTuples"></a>

```go
func XssMatchTuples() WafXssMatchSetXssMatchTuplesList
```

- *Type:* <a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList">WafXssMatchSetXssMatchTuplesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `XssMatchTuplesInput`<sup>Optional</sup> <a name="XssMatchTuplesInput" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.xssMatchTuplesInput"></a>

```go
func XssMatchTuplesInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafXssMatchSetConfig <a name="WafXssMatchSetConfig" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafxssmatchset"

&wafxssmatchset.WafXssMatchSetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	XssMatchTuples: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#name WafXssMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#id WafXssMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.xssMatchTuples">XssMatchTuples</a></code> | <code>interface{}</code> | xss_match_tuples block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#name WafXssMatchSet#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#id WafXssMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `XssMatchTuples`<sup>Optional</sup> <a name="XssMatchTuples" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetConfig.property.xssMatchTuples"></a>

```go
XssMatchTuples interface{}
```

- *Type:* interface{}

xss_match_tuples block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#xss_match_tuples WafXssMatchSet#xss_match_tuples}

---

### WafXssMatchSetXssMatchTuples <a name="WafXssMatchSetXssMatchTuples" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafxssmatchset"

&wafxssmatchset.WafXssMatchSetXssMatchTuples {
	FieldToMatch: github.com/cdktf/cdktf-provider-aws-go/aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch,
	TextTransformation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples.property.textTransformation">TextTransformation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#text_transformation WafXssMatchSet#text_transformation}. |

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples.property.fieldToMatch"></a>

```go
FieldToMatch WafXssMatchSetXssMatchTuplesFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#field_to_match WafXssMatchSet#field_to_match}

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuples.property.textTransformation"></a>

```go
TextTransformation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#text_transformation WafXssMatchSet#text_transformation}.

---

### WafXssMatchSetXssMatchTuplesFieldToMatch <a name="WafXssMatchSetXssMatchTuplesFieldToMatch" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafxssmatchset"

&wafxssmatchset.WafXssMatchSetXssMatchTuplesFieldToMatch {
	Type: *string,
	Data: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#type WafXssMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch.property.data">Data</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#data WafXssMatchSet#data}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#type WafXssMatchSet#type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch.property.data"></a>

```go
Data *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set#data WafXssMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference <a name="WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafxssmatchset"

wafxssmatchset.NewWafXssMatchSetXssMatchTuplesFieldToMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.resetData"></a>

```go
func ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() WafXssMatchSetXssMatchTuplesFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a>

---


### WafXssMatchSetXssMatchTuplesList <a name="WafXssMatchSetXssMatchTuplesList" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafxssmatchset"

wafxssmatchset.NewWafXssMatchSetXssMatchTuplesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafXssMatchSetXssMatchTuplesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.get"></a>

```go
func Get(index *f64) WafXssMatchSetXssMatchTuplesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafXssMatchSetXssMatchTuplesOutputReference <a name="WafXssMatchSetXssMatchTuplesOutputReference" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafxssmatchset"

wafxssmatchset.NewWafXssMatchSetXssMatchTuplesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafXssMatchSetXssMatchTuplesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.putFieldToMatch">PutFieldToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldToMatch` <a name="PutFieldToMatch" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.putFieldToMatch"></a>

```go
func PutFieldToMatch(value WafXssMatchSetXssMatchTuplesFieldToMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference">WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.fieldToMatchInput">FieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.textTransformationInput">TextTransformationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.textTransformation">TextTransformation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.fieldToMatch"></a>

```go
func FieldToMatch() WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference">WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference</a>

---

##### `FieldToMatchInput`<sup>Optional</sup> <a name="FieldToMatchInput" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.fieldToMatchInput"></a>

```go
func FieldToMatchInput() WafXssMatchSetXssMatchTuplesFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesFieldToMatch">WafXssMatchSetXssMatchTuplesFieldToMatch</a>

---

##### `TextTransformationInput`<sup>Optional</sup> <a name="TextTransformationInput" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.textTransformationInput"></a>

```go
func TextTransformationInput() *string
```

- *Type:* *string

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.textTransformation"></a>

```go
func TextTransformation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafXssMatchSet.WafXssMatchSetXssMatchTuplesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



