# `securityhubStandardsControl` Submodule <a name="`securityhubStandardsControl` Submodule" id="@cdktf/provider-aws.securityhubStandardsControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubStandardsControl <a name="SecurityhubStandardsControl" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control aws_securityhub_standards_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securityhubstandardscontrol"

securityhubstandardscontrol.NewSecurityhubStandardsControl(scope Construct, id *string, config SecurityhubStandardsControlConfig) SecurityhubStandardsControl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig">SecurityhubStandardsControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig">SecurityhubStandardsControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetDisabledReason">ResetDisabledReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDisabledReason` <a name="ResetDisabledReason" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetDisabledReason"></a>

```go
func ResetDisabledReason()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securityhubstandardscontrol"

securityhubstandardscontrol.SecurityhubStandardsControl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securityhubstandardscontrol"

securityhubstandardscontrol.SecurityhubStandardsControl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securityhubstandardscontrol"

securityhubstandardscontrol.SecurityhubStandardsControl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlId">ControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatusUpdatedAt">ControlStatusUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.relatedRequirements">RelatedRequirements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.remediationUrl">RemediationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.severityRating">SeverityRating</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatusInput">ControlStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.disabledReasonInput">DisabledReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.standardsControlArnInput">StandardsControlArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatus">ControlStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.disabledReason">DisabledReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.standardsControlArn">StandardsControlArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ControlId`<sup>Required</sup> <a name="ControlId" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlId"></a>

```go
func ControlId() *string
```

- *Type:* *string

---

##### `ControlStatusUpdatedAt`<sup>Required</sup> <a name="ControlStatusUpdatedAt" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatusUpdatedAt"></a>

```go
func ControlStatusUpdatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `RelatedRequirements`<sup>Required</sup> <a name="RelatedRequirements" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.relatedRequirements"></a>

```go
func RelatedRequirements() *[]*string
```

- *Type:* *[]*string

---

##### `RemediationUrl`<sup>Required</sup> <a name="RemediationUrl" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.remediationUrl"></a>

```go
func RemediationUrl() *string
```

- *Type:* *string

---

##### `SeverityRating`<sup>Required</sup> <a name="SeverityRating" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.severityRating"></a>

```go
func SeverityRating() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `ControlStatusInput`<sup>Optional</sup> <a name="ControlStatusInput" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatusInput"></a>

```go
func ControlStatusInput() *string
```

- *Type:* *string

---

##### `DisabledReasonInput`<sup>Optional</sup> <a name="DisabledReasonInput" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.disabledReasonInput"></a>

```go
func DisabledReasonInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StandardsControlArnInput`<sup>Optional</sup> <a name="StandardsControlArnInput" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.standardsControlArnInput"></a>

```go
func StandardsControlArnInput() *string
```

- *Type:* *string

---

##### `ControlStatus`<sup>Required</sup> <a name="ControlStatus" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatus"></a>

```go
func ControlStatus() *string
```

- *Type:* *string

---

##### `DisabledReason`<sup>Required</sup> <a name="DisabledReason" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.disabledReason"></a>

```go
func DisabledReason() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StandardsControlArn`<sup>Required</sup> <a name="StandardsControlArn" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.standardsControlArn"></a>

```go
func StandardsControlArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubStandardsControlConfig <a name="SecurityhubStandardsControlConfig" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securityhubstandardscontrol"

&securityhubstandardscontrol.SecurityhubStandardsControlConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ControlStatus: *string,
	StandardsControlArn: *string,
	DisabledReason: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.controlStatus">ControlStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#control_status SecurityhubStandardsControl#control_status}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.standardsControlArn">StandardsControlArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#standards_control_arn SecurityhubStandardsControl#standards_control_arn}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.disabledReason">DisabledReason</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#disabled_reason SecurityhubStandardsControl#disabled_reason}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#id SecurityhubStandardsControl#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ControlStatus`<sup>Required</sup> <a name="ControlStatus" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.controlStatus"></a>

```go
ControlStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#control_status SecurityhubStandardsControl#control_status}.

---

##### `StandardsControlArn`<sup>Required</sup> <a name="StandardsControlArn" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.standardsControlArn"></a>

```go
StandardsControlArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#standards_control_arn SecurityhubStandardsControl#standards_control_arn}.

---

##### `DisabledReason`<sup>Optional</sup> <a name="DisabledReason" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.disabledReason"></a>

```go
DisabledReason *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#disabled_reason SecurityhubStandardsControl#disabled_reason}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#id SecurityhubStandardsControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



