# `workspaceswebDataProtectionSettings` Submodule <a name="`workspaceswebDataProtectionSettings` Submodule" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebDataProtectionSettings <a name="WorkspaceswebDataProtectionSettings" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings aws_workspacesweb_data_protection_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettings(scope Construct, id *string, config WorkspaceswebDataProtectionSettingsConfig) WorkspaceswebDataProtectionSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig">WorkspaceswebDataProtectionSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig">WorkspaceswebDataProtectionSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.putInlineRedactionConfiguration">PutInlineRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetAdditionalEncryptionContext">ResetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetInlineRedactionConfiguration">ResetInlineRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInlineRedactionConfiguration` <a name="PutInlineRedactionConfiguration" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.putInlineRedactionConfiguration"></a>

```go
func PutInlineRedactionConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.putInlineRedactionConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalEncryptionContext` <a name="ResetAdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetAdditionalEncryptionContext"></a>

```go
func ResetAdditionalEncryptionContext()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetCustomerManagedKey"></a>

```go
func ResetCustomerManagedKey()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInlineRedactionConfiguration` <a name="ResetInlineRedactionConfiguration" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetInlineRedactionConfiguration"></a>

```go
func ResetInlineRedactionConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceswebDataProtectionSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WorkspaceswebDataProtectionSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspaceswebDataProtectionSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspaceswebDataProtectionSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebDataProtectionSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.associatedPortalArns">AssociatedPortalArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.dataProtectionSettingsArn">DataProtectionSettingsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.inlineRedactionConfiguration">InlineRedactionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.additionalEncryptionContextInput">AdditionalEncryptionContextInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.inlineRedactionConfigurationInput">InlineRedactionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.customerManagedKey">CustomerManagedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedPortalArns`<sup>Required</sup> <a name="AssociatedPortalArns" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.associatedPortalArns"></a>

```go
func AssociatedPortalArns() *[]*string
```

- *Type:* *[]*string

---

##### `DataProtectionSettingsArn`<sup>Required</sup> <a name="DataProtectionSettingsArn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.dataProtectionSettingsArn"></a>

```go
func DataProtectionSettingsArn() *string
```

- *Type:* *string

---

##### `InlineRedactionConfiguration`<sup>Required</sup> <a name="InlineRedactionConfiguration" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.inlineRedactionConfiguration"></a>

```go
func InlineRedactionConfiguration() WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AdditionalEncryptionContextInput`<sup>Optional</sup> <a name="AdditionalEncryptionContextInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.additionalEncryptionContextInput"></a>

```go
func AdditionalEncryptionContextInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.customerManagedKeyInput"></a>

```go
func CustomerManagedKeyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `InlineRedactionConfigurationInput`<sup>Optional</sup> <a name="InlineRedactionConfigurationInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.inlineRedactionConfigurationInput"></a>

```go
func InlineRedactionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AdditionalEncryptionContext`<sup>Required</sup> <a name="AdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.additionalEncryptionContext"></a>

```go
func AdditionalEncryptionContext() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.customerManagedKey"></a>

```go
func CustomerManagedKey() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebDataProtectionSettingsConfig <a name="WorkspaceswebDataProtectionSettingsConfig" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

&workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettingsConfig {
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
	InlineRedactionConfiguration: interface{},
	Region: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#display_name WorkspaceswebDataProtectionSettings#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#additional_encryption_context WorkspaceswebDataProtectionSettings#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#customer_managed_key WorkspaceswebDataProtectionSettings#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#description WorkspaceswebDataProtectionSettings#description}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.inlineRedactionConfiguration">InlineRedactionConfiguration</a></code> | <code>interface{}</code> | inline_redaction_configuration block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#tags WorkspaceswebDataProtectionSettings#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#display_name WorkspaceswebDataProtectionSettings#display_name}.

---

##### `AdditionalEncryptionContext`<sup>Optional</sup> <a name="AdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.additionalEncryptionContext"></a>

```go
AdditionalEncryptionContext *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#additional_encryption_context WorkspaceswebDataProtectionSettings#additional_encryption_context}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.customerManagedKey"></a>

```go
CustomerManagedKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#customer_managed_key WorkspaceswebDataProtectionSettings#customer_managed_key}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#description WorkspaceswebDataProtectionSettings#description}.

---

##### `InlineRedactionConfiguration`<sup>Optional</sup> <a name="InlineRedactionConfiguration" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.inlineRedactionConfiguration"></a>

```go
InlineRedactionConfiguration interface{}
```

- *Type:* interface{}

inline_redaction_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_configuration WorkspaceswebDataProtectionSettings#inline_redaction_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#region WorkspaceswebDataProtectionSettings#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#tags WorkspaceswebDataProtectionSettings#tags}.

---

### WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

&workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration {
	GlobalConfidenceLevel: *f64,
	GlobalEnforcedUrls: *[]*string,
	GlobalExemptUrls: *[]*string,
	InlineRedactionPattern: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalConfidenceLevel">GlobalConfidenceLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#global_confidence_level WorkspaceswebDataProtectionSettings#global_confidence_level}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalEnforcedUrls">GlobalEnforcedUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#global_enforced_urls WorkspaceswebDataProtectionSettings#global_enforced_urls}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalExemptUrls">GlobalExemptUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#global_exempt_urls WorkspaceswebDataProtectionSettings#global_exempt_urls}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.inlineRedactionPattern">InlineRedactionPattern</a></code> | <code>interface{}</code> | inline_redaction_pattern block. |

---

##### `GlobalConfidenceLevel`<sup>Optional</sup> <a name="GlobalConfidenceLevel" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalConfidenceLevel"></a>

```go
GlobalConfidenceLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#global_confidence_level WorkspaceswebDataProtectionSettings#global_confidence_level}.

---

##### `GlobalEnforcedUrls`<sup>Optional</sup> <a name="GlobalEnforcedUrls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalEnforcedUrls"></a>

```go
GlobalEnforcedUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#global_enforced_urls WorkspaceswebDataProtectionSettings#global_enforced_urls}.

---

##### `GlobalExemptUrls`<sup>Optional</sup> <a name="GlobalExemptUrls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalExemptUrls"></a>

```go
GlobalExemptUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#global_exempt_urls WorkspaceswebDataProtectionSettings#global_exempt_urls}.

---

##### `InlineRedactionPattern`<sup>Optional</sup> <a name="InlineRedactionPattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.inlineRedactionPattern"></a>

```go
InlineRedactionPattern interface{}
```

- *Type:* interface{}

inline_redaction_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_pattern WorkspaceswebDataProtectionSettings#inline_redaction_pattern}

---

### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

&workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern {
	BuiltInPatternId: *string,
	ConfidenceLevel: *f64,
	CustomPattern: interface{},
	EnforcedUrls: *[]*string,
	ExemptUrls: *[]*string,
	RedactionPlaceHolder: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.builtInPatternId">BuiltInPatternId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#built_in_pattern_id WorkspaceswebDataProtectionSettings#built_in_pattern_id}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.confidenceLevel">ConfidenceLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#confidence_level WorkspaceswebDataProtectionSettings#confidence_level}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.customPattern">CustomPattern</a></code> | <code>interface{}</code> | custom_pattern block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.enforcedUrls">EnforcedUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#enforced_urls WorkspaceswebDataProtectionSettings#enforced_urls}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.exemptUrls">ExemptUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#exempt_urls WorkspaceswebDataProtectionSettings#exempt_urls}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.redactionPlaceHolder">RedactionPlaceHolder</a></code> | <code>interface{}</code> | redaction_place_holder block. |

---

##### `BuiltInPatternId`<sup>Optional</sup> <a name="BuiltInPatternId" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.builtInPatternId"></a>

```go
BuiltInPatternId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#built_in_pattern_id WorkspaceswebDataProtectionSettings#built_in_pattern_id}.

---

##### `ConfidenceLevel`<sup>Optional</sup> <a name="ConfidenceLevel" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.confidenceLevel"></a>

```go
ConfidenceLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#confidence_level WorkspaceswebDataProtectionSettings#confidence_level}.

---

##### `CustomPattern`<sup>Optional</sup> <a name="CustomPattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.customPattern"></a>

```go
CustomPattern interface{}
```

- *Type:* interface{}

custom_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#custom_pattern WorkspaceswebDataProtectionSettings#custom_pattern}

---

##### `EnforcedUrls`<sup>Optional</sup> <a name="EnforcedUrls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.enforcedUrls"></a>

```go
EnforcedUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#enforced_urls WorkspaceswebDataProtectionSettings#enforced_urls}.

---

##### `ExemptUrls`<sup>Optional</sup> <a name="ExemptUrls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.exemptUrls"></a>

```go
ExemptUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#exempt_urls WorkspaceswebDataProtectionSettings#exempt_urls}.

---

##### `RedactionPlaceHolder`<sup>Optional</sup> <a name="RedactionPlaceHolder" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.redactionPlaceHolder"></a>

```go
RedactionPlaceHolder interface{}
```

- *Type:* interface{}

redaction_place_holder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder WorkspaceswebDataProtectionSettings#redaction_place_holder}

---

### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

&workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern {
	PatternName: *string,
	PatternRegex: *string,
	KeywordRegex: *string,
	PatternDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.patternName">PatternName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#pattern_name WorkspaceswebDataProtectionSettings#pattern_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.patternRegex">PatternRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#pattern_regex WorkspaceswebDataProtectionSettings#pattern_regex}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.keywordRegex">KeywordRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#keyword_regex WorkspaceswebDataProtectionSettings#keyword_regex}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.patternDescription">PatternDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#pattern_description WorkspaceswebDataProtectionSettings#pattern_description}. |

---

##### `PatternName`<sup>Required</sup> <a name="PatternName" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.patternName"></a>

```go
PatternName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#pattern_name WorkspaceswebDataProtectionSettings#pattern_name}.

---

##### `PatternRegex`<sup>Required</sup> <a name="PatternRegex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.patternRegex"></a>

```go
PatternRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#pattern_regex WorkspaceswebDataProtectionSettings#pattern_regex}.

---

##### `KeywordRegex`<sup>Optional</sup> <a name="KeywordRegex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.keywordRegex"></a>

```go
KeywordRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#keyword_regex WorkspaceswebDataProtectionSettings#keyword_regex}.

---

##### `PatternDescription`<sup>Optional</sup> <a name="PatternDescription" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.patternDescription"></a>

```go
PatternDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#pattern_description WorkspaceswebDataProtectionSettings#pattern_description}.

---

### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

&workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder {
	RedactionPlaceHolderType: *string,
	RedactionPlaceHolderText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder.property.redactionPlaceHolderType">RedactionPlaceHolderType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_type WorkspaceswebDataProtectionSettings#redaction_place_holder_type}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder.property.redactionPlaceHolderText">RedactionPlaceHolderText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_text WorkspaceswebDataProtectionSettings#redaction_place_holder_text}. |

---

##### `RedactionPlaceHolderType`<sup>Required</sup> <a name="RedactionPlaceHolderType" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder.property.redactionPlaceHolderType"></a>

```go
RedactionPlaceHolderType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_type WorkspaceswebDataProtectionSettings#redaction_place_holder_type}.

---

##### `RedactionPlaceHolderText`<sup>Optional</sup> <a name="RedactionPlaceHolderText" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder.property.redactionPlaceHolderText"></a>

```go
RedactionPlaceHolderText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_text WorkspaceswebDataProtectionSettings#redaction_place_holder_text}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.get"></a>

```go
func Get(index *f64) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resetKeywordRegex">ResetKeywordRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resetPatternDescription">ResetPatternDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeywordRegex` <a name="ResetKeywordRegex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resetKeywordRegex"></a>

```go
func ResetKeywordRegex()
```

##### `ResetPatternDescription` <a name="ResetPatternDescription" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resetPatternDescription"></a>

```go
func ResetPatternDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.keywordRegexInput">KeywordRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternDescriptionInput">PatternDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternNameInput">PatternNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternRegexInput">PatternRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.keywordRegex">KeywordRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternDescription">PatternDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternName">PatternName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternRegex">PatternRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeywordRegexInput`<sup>Optional</sup> <a name="KeywordRegexInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.keywordRegexInput"></a>

```go
func KeywordRegexInput() *string
```

- *Type:* *string

---

##### `PatternDescriptionInput`<sup>Optional</sup> <a name="PatternDescriptionInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternDescriptionInput"></a>

```go
func PatternDescriptionInput() *string
```

- *Type:* *string

---

##### `PatternNameInput`<sup>Optional</sup> <a name="PatternNameInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternNameInput"></a>

```go
func PatternNameInput() *string
```

- *Type:* *string

---

##### `PatternRegexInput`<sup>Optional</sup> <a name="PatternRegexInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternRegexInput"></a>

```go
func PatternRegexInput() *string
```

- *Type:* *string

---

##### `KeywordRegex`<sup>Required</sup> <a name="KeywordRegex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.keywordRegex"></a>

```go
func KeywordRegex() *string
```

- *Type:* *string

---

##### `PatternDescription`<sup>Required</sup> <a name="PatternDescription" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternDescription"></a>

```go
func PatternDescription() *string
```

- *Type:* *string

---

##### `PatternName`<sup>Required</sup> <a name="PatternName" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternName"></a>

```go
func PatternName() *string
```

- *Type:* *string

---

##### `PatternRegex`<sup>Required</sup> <a name="PatternRegex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternRegex"></a>

```go
func PatternRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.get"></a>

```go
func Get(index *f64) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.putCustomPattern">PutCustomPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.putRedactionPlaceHolder">PutRedactionPlaceHolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetBuiltInPatternId">ResetBuiltInPatternId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetConfidenceLevel">ResetConfidenceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetCustomPattern">ResetCustomPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetEnforcedUrls">ResetEnforcedUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetExemptUrls">ResetExemptUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetRedactionPlaceHolder">ResetRedactionPlaceHolder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPattern` <a name="PutCustomPattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.putCustomPattern"></a>

```go
func PutCustomPattern(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.putCustomPattern.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRedactionPlaceHolder` <a name="PutRedactionPlaceHolder" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.putRedactionPlaceHolder"></a>

```go
func PutRedactionPlaceHolder(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.putRedactionPlaceHolder.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBuiltInPatternId` <a name="ResetBuiltInPatternId" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetBuiltInPatternId"></a>

```go
func ResetBuiltInPatternId()
```

##### `ResetConfidenceLevel` <a name="ResetConfidenceLevel" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetConfidenceLevel"></a>

```go
func ResetConfidenceLevel()
```

##### `ResetCustomPattern` <a name="ResetCustomPattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetCustomPattern"></a>

```go
func ResetCustomPattern()
```

##### `ResetEnforcedUrls` <a name="ResetEnforcedUrls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetEnforcedUrls"></a>

```go
func ResetEnforcedUrls()
```

##### `ResetExemptUrls` <a name="ResetExemptUrls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetExemptUrls"></a>

```go
func ResetExemptUrls()
```

##### `ResetRedactionPlaceHolder` <a name="ResetRedactionPlaceHolder" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetRedactionPlaceHolder"></a>

```go
func ResetRedactionPlaceHolder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.customPattern">CustomPattern</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.redactionPlaceHolder">RedactionPlaceHolder</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.builtInPatternIdInput">BuiltInPatternIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.confidenceLevelInput">ConfidenceLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.customPatternInput">CustomPatternInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.enforcedUrlsInput">EnforcedUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.exemptUrlsInput">ExemptUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.redactionPlaceHolderInput">RedactionPlaceHolderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.builtInPatternId">BuiltInPatternId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.enforcedUrls">EnforcedUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.exemptUrls">ExemptUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomPattern`<sup>Required</sup> <a name="CustomPattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.customPattern"></a>

```go
func CustomPattern() WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList</a>

---

##### `RedactionPlaceHolder`<sup>Required</sup> <a name="RedactionPlaceHolder" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.redactionPlaceHolder"></a>

```go
func RedactionPlaceHolder() WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList</a>

---

##### `BuiltInPatternIdInput`<sup>Optional</sup> <a name="BuiltInPatternIdInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.builtInPatternIdInput"></a>

```go
func BuiltInPatternIdInput() *string
```

- *Type:* *string

---

##### `ConfidenceLevelInput`<sup>Optional</sup> <a name="ConfidenceLevelInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.confidenceLevelInput"></a>

```go
func ConfidenceLevelInput() *f64
```

- *Type:* *f64

---

##### `CustomPatternInput`<sup>Optional</sup> <a name="CustomPatternInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.customPatternInput"></a>

```go
func CustomPatternInput() interface{}
```

- *Type:* interface{}

---

##### `EnforcedUrlsInput`<sup>Optional</sup> <a name="EnforcedUrlsInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.enforcedUrlsInput"></a>

```go
func EnforcedUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExemptUrlsInput`<sup>Optional</sup> <a name="ExemptUrlsInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.exemptUrlsInput"></a>

```go
func ExemptUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RedactionPlaceHolderInput`<sup>Optional</sup> <a name="RedactionPlaceHolderInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.redactionPlaceHolderInput"></a>

```go
func RedactionPlaceHolderInput() interface{}
```

- *Type:* interface{}

---

##### `BuiltInPatternId`<sup>Required</sup> <a name="BuiltInPatternId" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.builtInPatternId"></a>

```go
func BuiltInPatternId() *string
```

- *Type:* *string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.confidenceLevel"></a>

```go
func ConfidenceLevel() *f64
```

- *Type:* *f64

---

##### `EnforcedUrls`<sup>Required</sup> <a name="EnforcedUrls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.enforcedUrls"></a>

```go
func EnforcedUrls() *[]*string
```

- *Type:* *[]*string

---

##### `ExemptUrls`<sup>Required</sup> <a name="ExemptUrls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.exemptUrls"></a>

```go
func ExemptUrls() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.get"></a>

```go
func Get(index *f64) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.resetRedactionPlaceHolderText">ResetRedactionPlaceHolderText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRedactionPlaceHolderText` <a name="ResetRedactionPlaceHolderText" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.resetRedactionPlaceHolderText"></a>

```go
func ResetRedactionPlaceHolderText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderTextInput">RedactionPlaceHolderTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderTypeInput">RedactionPlaceHolderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderText">RedactionPlaceHolderText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderType">RedactionPlaceHolderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedactionPlaceHolderTextInput`<sup>Optional</sup> <a name="RedactionPlaceHolderTextInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderTextInput"></a>

```go
func RedactionPlaceHolderTextInput() *string
```

- *Type:* *string

---

##### `RedactionPlaceHolderTypeInput`<sup>Optional</sup> <a name="RedactionPlaceHolderTypeInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderTypeInput"></a>

```go
func RedactionPlaceHolderTypeInput() *string
```

- *Type:* *string

---

##### `RedactionPlaceHolderText`<sup>Required</sup> <a name="RedactionPlaceHolderText" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderText"></a>

```go
func RedactionPlaceHolderText() *string
```

- *Type:* *string

---

##### `RedactionPlaceHolderType`<sup>Required</sup> <a name="RedactionPlaceHolderType" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderType"></a>

```go
func RedactionPlaceHolderType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.get"></a>

```go
func Get(index *f64) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.putInlineRedactionPattern">PutInlineRedactionPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalConfidenceLevel">ResetGlobalConfidenceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalEnforcedUrls">ResetGlobalEnforcedUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalExemptUrls">ResetGlobalExemptUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetInlineRedactionPattern">ResetInlineRedactionPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInlineRedactionPattern` <a name="PutInlineRedactionPattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.putInlineRedactionPattern"></a>

```go
func PutInlineRedactionPattern(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.putInlineRedactionPattern.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGlobalConfidenceLevel` <a name="ResetGlobalConfidenceLevel" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalConfidenceLevel"></a>

```go
func ResetGlobalConfidenceLevel()
```

##### `ResetGlobalEnforcedUrls` <a name="ResetGlobalEnforcedUrls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalEnforcedUrls"></a>

```go
func ResetGlobalEnforcedUrls()
```

##### `ResetGlobalExemptUrls` <a name="ResetGlobalExemptUrls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalExemptUrls"></a>

```go
func ResetGlobalExemptUrls()
```

##### `ResetInlineRedactionPattern` <a name="ResetInlineRedactionPattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetInlineRedactionPattern"></a>

```go
func ResetInlineRedactionPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPattern">InlineRedactionPattern</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevelInput">GlobalConfidenceLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrlsInput">GlobalEnforcedUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrlsInput">GlobalExemptUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPatternInput">InlineRedactionPatternInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevel">GlobalConfidenceLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrls">GlobalEnforcedUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrls">GlobalExemptUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InlineRedactionPattern`<sup>Required</sup> <a name="InlineRedactionPattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPattern"></a>

```go
func InlineRedactionPattern() WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList</a>

---

##### `GlobalConfidenceLevelInput`<sup>Optional</sup> <a name="GlobalConfidenceLevelInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevelInput"></a>

```go
func GlobalConfidenceLevelInput() *f64
```

- *Type:* *f64

---

##### `GlobalEnforcedUrlsInput`<sup>Optional</sup> <a name="GlobalEnforcedUrlsInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrlsInput"></a>

```go
func GlobalEnforcedUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GlobalExemptUrlsInput`<sup>Optional</sup> <a name="GlobalExemptUrlsInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrlsInput"></a>

```go
func GlobalExemptUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InlineRedactionPatternInput`<sup>Optional</sup> <a name="InlineRedactionPatternInput" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPatternInput"></a>

```go
func InlineRedactionPatternInput() interface{}
```

- *Type:* interface{}

---

##### `GlobalConfidenceLevel`<sup>Required</sup> <a name="GlobalConfidenceLevel" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevel"></a>

```go
func GlobalConfidenceLevel() *f64
```

- *Type:* *f64

---

##### `GlobalEnforcedUrls`<sup>Required</sup> <a name="GlobalEnforcedUrls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrls"></a>

```go
func GlobalEnforcedUrls() *[]*string
```

- *Type:* *[]*string

---

##### `GlobalExemptUrls`<sup>Required</sup> <a name="GlobalExemptUrls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrls"></a>

```go
func GlobalExemptUrls() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



