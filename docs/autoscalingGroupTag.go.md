# `autoscalingGroupTag` Submodule <a name="`autoscalingGroupTag` Submodule" id="@cdktf/provider-aws.autoscalingGroupTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingGroupTagA <a name="AutoscalingGroupTagA" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag aws_autoscaling_group_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/autoscalinggrouptag"

autoscalinggrouptag.NewAutoscalingGroupTagA(scope Construct, id *string, config AutoscalingGroupTagAConfig) AutoscalingGroupTagA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig">AutoscalingGroupTagAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig">AutoscalingGroupTagAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.putTag"></a>

```go
func PutTag(value AutoscalingGroupTagTag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/autoscalinggrouptag"

autoscalinggrouptag.AutoscalingGroupTagA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/autoscalinggrouptag"

autoscalinggrouptag.AutoscalingGroupTagA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/autoscalinggrouptag"

autoscalinggrouptag.AutoscalingGroupTagA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference">AutoscalingGroupTagTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.autoscalingGroupNameInput">AutoscalingGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.tagInput">TagInput</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.autoscalingGroupName">AutoscalingGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.tag"></a>

```go
func Tag() AutoscalingGroupTagTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference">AutoscalingGroupTagTagOutputReference</a>

---

##### `AutoscalingGroupNameInput`<sup>Optional</sup> <a name="AutoscalingGroupNameInput" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.autoscalingGroupNameInput"></a>

```go
func AutoscalingGroupNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.tagInput"></a>

```go
func TagInput() AutoscalingGroupTagTag
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

---

##### `AutoscalingGroupName`<sup>Required</sup> <a name="AutoscalingGroupName" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.autoscalingGroupName"></a>

```go
func AutoscalingGroupName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingGroupTagAConfig <a name="AutoscalingGroupTagAConfig" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/autoscalinggrouptag"

&autoscalinggrouptag.AutoscalingGroupTagAConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutoscalingGroupName: *string,
	Tag: github.com/cdktf/cdktf-provider-aws-go/aws.autoscalingGroupTag.AutoscalingGroupTagTag,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.autoscalingGroupName">AutoscalingGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#autoscaling_group_name AutoscalingGroupTagA#autoscaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a></code> | tag block. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#id AutoscalingGroupTagA#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoscalingGroupName`<sup>Required</sup> <a name="AutoscalingGroupName" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.autoscalingGroupName"></a>

```go
AutoscalingGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#autoscaling_group_name AutoscalingGroupTagA#autoscaling_group_name}.

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.tag"></a>

```go
Tag AutoscalingGroupTagTag
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#tag AutoscalingGroupTagA#tag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#id AutoscalingGroupTagA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AutoscalingGroupTagTag <a name="AutoscalingGroupTagTag" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/autoscalinggrouptag"

&autoscalinggrouptag.AutoscalingGroupTagTag {
	Key: *string,
	PropagateAtLaunch: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#key AutoscalingGroupTagA#key}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.property.propagateAtLaunch">PropagateAtLaunch</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#propagate_at_launch AutoscalingGroupTagA#propagate_at_launch}. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#value AutoscalingGroupTagA#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#key AutoscalingGroupTagA#key}.

---

##### `PropagateAtLaunch`<sup>Required</sup> <a name="PropagateAtLaunch" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.property.propagateAtLaunch"></a>

```go
PropagateAtLaunch interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#propagate_at_launch AutoscalingGroupTagA#propagate_at_launch}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag#value AutoscalingGroupTagA#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingGroupTagTagOutputReference <a name="AutoscalingGroupTagTagOutputReference" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/autoscalinggrouptag"

autoscalinggrouptag.NewAutoscalingGroupTagTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutoscalingGroupTagTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.propagateAtLaunchInput">PropagateAtLaunchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.propagateAtLaunch">PropagateAtLaunch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `PropagateAtLaunchInput`<sup>Optional</sup> <a name="PropagateAtLaunchInput" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.propagateAtLaunchInput"></a>

```go
func PropagateAtLaunchInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `PropagateAtLaunch`<sup>Required</sup> <a name="PropagateAtLaunch" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.propagateAtLaunch"></a>

```go
func PropagateAtLaunch() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.internalValue"></a>

```go
func InternalValue() AutoscalingGroupTagTag
```

- *Type:* <a href="#@cdktf/provider-aws.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

---



