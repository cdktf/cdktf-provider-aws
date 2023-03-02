# `detectiveMember` Submodule <a name="`detectiveMember` Submodule" id="@cdktf/provider-aws.detectiveMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DetectiveMember <a name="DetectiveMember" id="@cdktf/provider-aws.detectiveMember.DetectiveMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/detective_member aws_detective_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/detectivemember"

detectivemember.NewDetectiveMember(scope Construct, id *string, config DetectiveMemberConfig) DetectiveMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig">DetectiveMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig">DetectiveMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.resetDisableEmailNotification">ResetDisableEmailNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.resetMessage">ResetMessage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDisableEmailNotification` <a name="ResetDisableEmailNotification" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.resetDisableEmailNotification"></a>

```go
func ResetDisableEmailNotification()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.resetId"></a>

```go
func ResetId()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.resetMessage"></a>

```go
func ResetMessage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/detectivemember"

detectivemember.DetectiveMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/detectivemember"

detectivemember.DetectiveMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/detectivemember"

detectivemember.DetectiveMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.administratorId">AdministratorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.disabledReason">DisabledReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.invitedTime">InvitedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.updatedTime">UpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.volumeUsageInBytes">VolumeUsageInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.disableEmailNotificationInput">DisableEmailNotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.graphArnInput">GraphArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.disableEmailNotification">DisableEmailNotification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.graphArn">GraphArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.message">Message</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdministratorId`<sup>Required</sup> <a name="AdministratorId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.administratorId"></a>

```go
func AdministratorId() *string
```

- *Type:* *string

---

##### `DisabledReason`<sup>Required</sup> <a name="DisabledReason" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.disabledReason"></a>

```go
func DisabledReason() *string
```

- *Type:* *string

---

##### `InvitedTime`<sup>Required</sup> <a name="InvitedTime" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.invitedTime"></a>

```go
func InvitedTime() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.updatedTime"></a>

```go
func UpdatedTime() *string
```

- *Type:* *string

---

##### `VolumeUsageInBytes`<sup>Required</sup> <a name="VolumeUsageInBytes" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.volumeUsageInBytes"></a>

```go
func VolumeUsageInBytes() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DisableEmailNotificationInput`<sup>Optional</sup> <a name="DisableEmailNotificationInput" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.disableEmailNotificationInput"></a>

```go
func DisableEmailNotificationInput() interface{}
```

- *Type:* interface{}

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `GraphArnInput`<sup>Optional</sup> <a name="GraphArnInput" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.graphArnInput"></a>

```go
func GraphArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `DisableEmailNotification`<sup>Required</sup> <a name="DisableEmailNotification" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.disableEmailNotification"></a>

```go
func DisableEmailNotification() interface{}
```

- *Type:* interface{}

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `GraphArn`<sup>Required</sup> <a name="GraphArn" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.graphArn"></a>

```go
func GraphArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DetectiveMemberConfig <a name="DetectiveMemberConfig" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/detectivemember"

&detectivemember.DetectiveMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	EmailAddress: *string,
	GraphArn: *string,
	DisableEmailNotification: interface{},
	Id: *string,
	Message: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#account_id DetectiveMember#account_id}. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#email_address DetectiveMember#email_address}. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.graphArn">GraphArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#graph_arn DetectiveMember#graph_arn}. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.disableEmailNotification">DisableEmailNotification</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#disable_email_notification DetectiveMember#disable_email_notification}. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#id DetectiveMember#id}. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.message">Message</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#message DetectiveMember#message}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#account_id DetectiveMember#account_id}.

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#email_address DetectiveMember#email_address}.

---

##### `GraphArn`<sup>Required</sup> <a name="GraphArn" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.graphArn"></a>

```go
GraphArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#graph_arn DetectiveMember#graph_arn}.

---

##### `DisableEmailNotification`<sup>Optional</sup> <a name="DisableEmailNotification" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.disableEmailNotification"></a>

```go
DisableEmailNotification interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#disable_email_notification DetectiveMember#disable_email_notification}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#id DetectiveMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.message"></a>

```go
Message *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#message DetectiveMember#message}.

---



