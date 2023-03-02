# `wafregionalRegexMatchSet` Submodule <a name="`wafregionalRegexMatchSet` Submodule" id="@cdktf/provider-aws.wafregionalRegexMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalRegexMatchSet <a name="WafregionalRegexMatchSet" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set aws_wafregional_regex_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalregexmatchset"

wafregionalregexmatchset.NewWafregionalRegexMatchSet(scope Construct, id *string, config WafregionalRegexMatchSetConfig) WafregionalRegexMatchSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig">WafregionalRegexMatchSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig">WafregionalRegexMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.putRegexMatchTuple">PutRegexMatchTuple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetRegexMatchTuple">ResetRegexMatchTuple</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRegexMatchTuple` <a name="PutRegexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.putRegexMatchTuple"></a>

```go
func PutRegexMatchTuple(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.putRegexMatchTuple.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetId"></a>

```go
func ResetId()
```

##### `ResetRegexMatchTuple` <a name="ResetRegexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.resetRegexMatchTuple"></a>

```go
func ResetRegexMatchTuple()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalregexmatchset"

wafregionalregexmatchset.WafregionalRegexMatchSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalregexmatchset"

wafregionalregexmatchset.WafregionalRegexMatchSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalregexmatchset"

wafregionalregexmatchset.WafregionalRegexMatchSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTuple">RegexMatchTuple</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList">WafregionalRegexMatchSetRegexMatchTupleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTupleInput">RegexMatchTupleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RegexMatchTuple`<sup>Required</sup> <a name="RegexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTuple"></a>

```go
func RegexMatchTuple() WafregionalRegexMatchSetRegexMatchTupleList
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList">WafregionalRegexMatchSetRegexMatchTupleList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexMatchTupleInput`<sup>Optional</sup> <a name="RegexMatchTupleInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.regexMatchTupleInput"></a>

```go
func RegexMatchTupleInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalRegexMatchSetConfig <a name="WafregionalRegexMatchSetConfig" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalregexmatchset"

&wafregionalregexmatchset.WafregionalRegexMatchSetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	RegexMatchTuple: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.regexMatchTuple">RegexMatchTuple</a></code> | <code>interface{}</code> | regex_match_tuple block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#name WafregionalRegexMatchSet#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#id WafregionalRegexMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RegexMatchTuple`<sup>Optional</sup> <a name="RegexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetConfig.property.regexMatchTuple"></a>

```go
RegexMatchTuple interface{}
```

- *Type:* interface{}

regex_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_match_tuple WafregionalRegexMatchSet#regex_match_tuple}

---

### WafregionalRegexMatchSetRegexMatchTuple <a name="WafregionalRegexMatchSetRegexMatchTuple" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalregexmatchset"

&wafregionalregexmatchset.WafregionalRegexMatchSetRegexMatchTuple {
	FieldToMatch: github.com/cdktf/cdktf-provider-aws-go/aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch,
	RegexPatternSetId: *string,
	TextTransformation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.regexPatternSetId">RegexPatternSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_pattern_set_id WafregionalRegexMatchSet#regex_pattern_set_id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.textTransformation">TextTransformation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#text_transformation WafregionalRegexMatchSet#text_transformation}. |

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.fieldToMatch"></a>

```go
FieldToMatch WafregionalRegexMatchSetRegexMatchTupleFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#field_to_match WafregionalRegexMatchSet#field_to_match}

---

##### `RegexPatternSetId`<sup>Required</sup> <a name="RegexPatternSetId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.regexPatternSetId"></a>

```go
RegexPatternSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#regex_pattern_set_id WafregionalRegexMatchSet#regex_pattern_set_id}.

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTuple.property.textTransformation"></a>

```go
TextTransformation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#text_transformation WafregionalRegexMatchSet#text_transformation}.

---

### WafregionalRegexMatchSetRegexMatchTupleFieldToMatch <a name="WafregionalRegexMatchSetRegexMatchTupleFieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalregexmatchset"

&wafregionalregexmatchset.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch {
	Type: *string,
	Data: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#type WafregionalRegexMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.data">Data</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#data WafregionalRegexMatchSet#data}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#type WafregionalRegexMatchSet#type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch.property.data"></a>

```go
Data *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set#data WafregionalRegexMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference <a name="WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalregexmatchset"

wafregionalregexmatchset.NewWafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resetData"></a>

```go
func ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() WafregionalRegexMatchSetRegexMatchTupleFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

---


### WafregionalRegexMatchSetRegexMatchTupleList <a name="WafregionalRegexMatchSetRegexMatchTupleList" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalregexmatchset"

wafregionalregexmatchset.NewWafregionalRegexMatchSetRegexMatchTupleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WafregionalRegexMatchSetRegexMatchTupleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.get"></a>

```go
func Get(index *f64) WafregionalRegexMatchSetRegexMatchTupleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WafregionalRegexMatchSetRegexMatchTupleOutputReference <a name="WafregionalRegexMatchSetRegexMatchTupleOutputReference" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/wafregionalregexmatchset"

wafregionalregexmatchset.NewWafregionalRegexMatchSetRegexMatchTupleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WafregionalRegexMatchSetRegexMatchTupleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch">PutFieldToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldToMatch` <a name="PutFieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch"></a>

```go
func PutFieldToMatch(value WafregionalRegexMatchSetRegexMatchTupleFieldToMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference">WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatchInput">FieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetIdInput">RegexPatternSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformationInput">TextTransformationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetId">RegexPatternSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformation">TextTransformation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatch"></a>

```go
func FieldToMatch() WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference">WafregionalRegexMatchSetRegexMatchTupleFieldToMatchOutputReference</a>

---

##### `FieldToMatchInput`<sup>Optional</sup> <a name="FieldToMatchInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatchInput"></a>

```go
func FieldToMatchInput() WafregionalRegexMatchSetRegexMatchTupleFieldToMatch
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleFieldToMatch">WafregionalRegexMatchSetRegexMatchTupleFieldToMatch</a>

---

##### `RegexPatternSetIdInput`<sup>Optional</sup> <a name="RegexPatternSetIdInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetIdInput"></a>

```go
func RegexPatternSetIdInput() *string
```

- *Type:* *string

---

##### `TextTransformationInput`<sup>Optional</sup> <a name="TextTransformationInput" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformationInput"></a>

```go
func TextTransformationInput() *string
```

- *Type:* *string

---

##### `RegexPatternSetId`<sup>Required</sup> <a name="RegexPatternSetId" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetId"></a>

```go
func RegexPatternSetId() *string
```

- *Type:* *string

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.textTransformation"></a>

```go
func TextTransformation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafregionalRegexMatchSet.WafregionalRegexMatchSetRegexMatchTupleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



