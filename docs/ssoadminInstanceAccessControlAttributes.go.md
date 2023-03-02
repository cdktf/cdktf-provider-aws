# `ssoadminInstanceAccessControlAttributes` Submodule <a name="`ssoadminInstanceAccessControlAttributes` Submodule" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminInstanceAccessControlAttributes <a name="SsoadminInstanceAccessControlAttributes" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes aws_ssoadmin_instance_access_control_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmininstanceaccesscontrolattributes"

ssoadmininstanceaccesscontrolattributes.NewSsoadminInstanceAccessControlAttributes(scope Construct, id *string, config SsoadminInstanceAccessControlAttributesConfig) SsoadminInstanceAccessControlAttributes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig">SsoadminInstanceAccessControlAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig">SsoadminInstanceAccessControlAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.putAttribute">PutAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAttribute` <a name="PutAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.putAttribute"></a>

```go
func PutAttribute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.putAttribute.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmininstanceaccesscontrolattributes"

ssoadmininstanceaccesscontrolattributes.SsoadminInstanceAccessControlAttributes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmininstanceaccesscontrolattributes"

ssoadmininstanceaccesscontrolattributes.SsoadminInstanceAccessControlAttributes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmininstanceaccesscontrolattributes"

ssoadmininstanceaccesscontrolattributes.SsoadminInstanceAccessControlAttributes_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attribute">Attribute</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList">SsoadminInstanceAccessControlAttributesAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attributeInput">AttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attribute"></a>

```go
func Attribute() SsoadminInstanceAccessControlAttributesAttributeList
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList">SsoadminInstanceAccessControlAttributesAttributeList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attributeInput"></a>

```go
func AttributeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminInstanceAccessControlAttributesAttribute <a name="SsoadminInstanceAccessControlAttributesAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmininstanceaccesscontrolattributes"

&ssoadmininstanceaccesscontrolattributes.SsoadminInstanceAccessControlAttributesAttribute {
	Key: *string,
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#key SsoadminInstanceAccessControlAttributes#key}. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.value">Value</a></code> | <code>interface{}</code> | value block. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#key SsoadminInstanceAccessControlAttributes#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#value SsoadminInstanceAccessControlAttributes#value}

---

### SsoadminInstanceAccessControlAttributesAttributeValue <a name="SsoadminInstanceAccessControlAttributesAttributeValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmininstanceaccesscontrolattributes"

&ssoadmininstanceaccesscontrolattributes.SsoadminInstanceAccessControlAttributesAttributeValue {
	Source: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue.property.source">Source</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#source SsoadminInstanceAccessControlAttributes#source}. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue.property.source"></a>

```go
Source *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#source SsoadminInstanceAccessControlAttributes#source}.

---

### SsoadminInstanceAccessControlAttributesConfig <a name="SsoadminInstanceAccessControlAttributesConfig" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmininstanceaccesscontrolattributes"

&ssoadmininstanceaccesscontrolattributes.SsoadminInstanceAccessControlAttributesConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Attribute: interface{},
	InstanceArn: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.attribute">Attribute</a></code> | <code>interface{}</code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#instance_arn SsoadminInstanceAccessControlAttributes#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#id SsoadminInstanceAccessControlAttributes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.attribute"></a>

```go
Attribute interface{}
```

- *Type:* interface{}

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#attribute SsoadminInstanceAccessControlAttributes#attribute}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#instance_arn SsoadminInstanceAccessControlAttributes#instance_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#id SsoadminInstanceAccessControlAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminInstanceAccessControlAttributesAttributeList <a name="SsoadminInstanceAccessControlAttributesAttributeList" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmininstanceaccesscontrolattributes"

ssoadmininstanceaccesscontrolattributes.NewSsoadminInstanceAccessControlAttributesAttributeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsoadminInstanceAccessControlAttributesAttributeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.get"></a>

```go
func Get(index *f64) SsoadminInstanceAccessControlAttributesAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoadminInstanceAccessControlAttributesAttributeOutputReference <a name="SsoadminInstanceAccessControlAttributesAttributeOutputReference" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmininstanceaccesscontrolattributes"

ssoadmininstanceaccesscontrolattributes.NewSsoadminInstanceAccessControlAttributesAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsoadminInstanceAccessControlAttributesAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.putValue">PutValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.putValue"></a>

```go
func PutValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.putValue.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList">SsoadminInstanceAccessControlAttributesAttributeValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.value"></a>

```go
func Value() SsoadminInstanceAccessControlAttributesAttributeValueList
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList">SsoadminInstanceAccessControlAttributesAttributeValueList</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoadminInstanceAccessControlAttributesAttributeValueList <a name="SsoadminInstanceAccessControlAttributesAttributeValueList" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmininstanceaccesscontrolattributes"

ssoadmininstanceaccesscontrolattributes.NewSsoadminInstanceAccessControlAttributesAttributeValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsoadminInstanceAccessControlAttributesAttributeValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.get"></a>

```go
func Get(index *f64) SsoadminInstanceAccessControlAttributesAttributeValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoadminInstanceAccessControlAttributesAttributeValueOutputReference <a name="SsoadminInstanceAccessControlAttributesAttributeValueOutputReference" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssoadmininstanceaccesscontrolattributes"

ssoadmininstanceaccesscontrolattributes.NewSsoadminInstanceAccessControlAttributesAttributeValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsoadminInstanceAccessControlAttributesAttributeValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.sourceInput">SourceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.source">Source</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.sourceInput"></a>

```go
func SourceInput() *[]*string
```

- *Type:* *[]*string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.source"></a>

```go
func Source() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



