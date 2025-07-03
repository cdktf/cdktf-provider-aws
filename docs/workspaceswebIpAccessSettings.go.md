# `workspaceswebIpAccessSettings` Submodule <a name="`workspaceswebIpAccessSettings` Submodule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebIpAccessSettings <a name="WorkspaceswebIpAccessSettings" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings aws_workspacesweb_ip_access_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebipaccesssettings"

workspaceswebipaccesssettings.NewWorkspaceswebIpAccessSettings(scope Construct, id *string, config WorkspaceswebIpAccessSettingsConfig) WorkspaceswebIpAccessSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig">WorkspaceswebIpAccessSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig">WorkspaceswebIpAccessSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRule">PutIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetAdditionalEncryptionContext">ResetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetIpRule">ResetIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpRule` <a name="PutIpRule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRule"></a>

```go
func PutIpRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalEncryptionContext` <a name="ResetAdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetAdditionalEncryptionContext"></a>

```go
func ResetAdditionalEncryptionContext()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetCustomerManagedKey"></a>

```go
func ResetCustomerManagedKey()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIpRule` <a name="ResetIpRule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetIpRule"></a>

```go
func ResetIpRule()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceswebIpAccessSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebipaccesssettings"

workspaceswebipaccesssettings.WorkspaceswebIpAccessSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebipaccesssettings"

workspaceswebipaccesssettings.WorkspaceswebIpAccessSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebipaccesssettings"

workspaceswebipaccesssettings.WorkspaceswebIpAccessSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebipaccesssettings"

workspaceswebipaccesssettings.WorkspaceswebIpAccessSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WorkspaceswebIpAccessSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspaceswebIpAccessSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspaceswebIpAccessSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebIpAccessSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.associatedPortalArns">AssociatedPortalArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipAccessSettingsArn">IpAccessSettingsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRule">IpRule</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList">WorkspaceswebIpAccessSettingsIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContextInput">AdditionalEncryptionContextInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRuleInput">IpRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKey">CustomerManagedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedPortalArns`<sup>Required</sup> <a name="AssociatedPortalArns" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.associatedPortalArns"></a>

```go
func AssociatedPortalArns() *[]*string
```

- *Type:* *[]*string

---

##### `IpAccessSettingsArn`<sup>Required</sup> <a name="IpAccessSettingsArn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipAccessSettingsArn"></a>

```go
func IpAccessSettingsArn() *string
```

- *Type:* *string

---

##### `IpRule`<sup>Required</sup> <a name="IpRule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRule"></a>

```go
func IpRule() WorkspaceswebIpAccessSettingsIpRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList">WorkspaceswebIpAccessSettingsIpRuleList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AdditionalEncryptionContextInput`<sup>Optional</sup> <a name="AdditionalEncryptionContextInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContextInput"></a>

```go
func AdditionalEncryptionContextInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKeyInput"></a>

```go
func CustomerManagedKeyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IpRuleInput`<sup>Optional</sup> <a name="IpRuleInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRuleInput"></a>

```go
func IpRuleInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AdditionalEncryptionContext`<sup>Required</sup> <a name="AdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContext"></a>

```go
func AdditionalEncryptionContext() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKey"></a>

```go
func CustomerManagedKey() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebIpAccessSettingsConfig <a name="WorkspaceswebIpAccessSettingsConfig" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebipaccesssettings"

&workspaceswebipaccesssettings.WorkspaceswebIpAccessSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	AdditionalEncryptionContext: *map[string]*string,
	CustomerManagedKey: *string,
	Description: *string,
	IpRule: interface{},
	Region: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.ipRule">IpRule</a></code> | <code>interface{}</code> | ip_rule block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}.

---

##### `AdditionalEncryptionContext`<sup>Optional</sup> <a name="AdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.additionalEncryptionContext"></a>

```go
AdditionalEncryptionContext *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.customerManagedKey"></a>

```go
CustomerManagedKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

##### `IpRule`<sup>Optional</sup> <a name="IpRule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.ipRule"></a>

```go
IpRule interface{}
```

- *Type:* interface{}

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#ip_rule WorkspaceswebIpAccessSettings#ip_rule}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#region WorkspaceswebIpAccessSettings#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}.

---

### WorkspaceswebIpAccessSettingsIpRule <a name="WorkspaceswebIpAccessSettingsIpRule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebipaccesssettings"

&workspaceswebipaccesssettings.WorkspaceswebIpAccessSettingsIpRule {
	IpRange: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.property.ipRange">IpRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#ip_range WorkspaceswebIpAccessSettings#ip_range}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.property.ipRange"></a>

```go
IpRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#ip_range WorkspaceswebIpAccessSettings#ip_range}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebIpAccessSettingsIpRuleList <a name="WorkspaceswebIpAccessSettingsIpRuleList" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebipaccesssettings"

workspaceswebipaccesssettings.NewWorkspaceswebIpAccessSettingsIpRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspaceswebIpAccessSettingsIpRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.get"></a>

```go
func Get(index *f64) WorkspaceswebIpAccessSettingsIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebIpAccessSettingsIpRuleOutputReference <a name="WorkspaceswebIpAccessSettingsIpRuleOutputReference" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebipaccesssettings"

workspaceswebipaccesssettings.NewWorkspaceswebIpAccessSettingsIpRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspaceswebIpAccessSettingsIpRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.ipRangeInput">IpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.ipRange">IpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.ipRangeInput"></a>

```go
func IpRangeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.ipRange"></a>

```go
func IpRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



