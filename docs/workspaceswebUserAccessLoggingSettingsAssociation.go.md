# `workspaceswebUserAccessLoggingSettingsAssociation` Submodule <a name="`workspaceswebUserAccessLoggingSettingsAssociation` Submodule" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebUserAccessLoggingSettingsAssociation <a name="WorkspaceswebUserAccessLoggingSettingsAssociation" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_user_access_logging_settings_association aws_workspacesweb_user_access_logging_settings_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebuseraccessloggingsettingsassociation"

workspaceswebuseraccessloggingsettingsassociation.NewWorkspaceswebUserAccessLoggingSettingsAssociation(scope Construct, id *string, config WorkspaceswebUserAccessLoggingSettingsAssociationConfig) WorkspaceswebUserAccessLoggingSettingsAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig">WorkspaceswebUserAccessLoggingSettingsAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig">WorkspaceswebUserAccessLoggingSettingsAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceswebUserAccessLoggingSettingsAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebuseraccessloggingsettingsassociation"

workspaceswebuseraccessloggingsettingsassociation.WorkspaceswebUserAccessLoggingSettingsAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebuseraccessloggingsettingsassociation"

workspaceswebuseraccessloggingsettingsassociation.WorkspaceswebUserAccessLoggingSettingsAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebuseraccessloggingsettingsassociation"

workspaceswebuseraccessloggingsettingsassociation.WorkspaceswebUserAccessLoggingSettingsAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebuseraccessloggingsettingsassociation"

workspaceswebuseraccessloggingsettingsassociation.WorkspaceswebUserAccessLoggingSettingsAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WorkspaceswebUserAccessLoggingSettingsAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspaceswebUserAccessLoggingSettingsAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspaceswebUserAccessLoggingSettingsAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_user_access_logging_settings_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebUserAccessLoggingSettingsAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.portalArnInput">PortalArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.userAccessLoggingSettingsArnInput">UserAccessLoggingSettingsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.portalArn">PortalArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.userAccessLoggingSettingsArn">UserAccessLoggingSettingsArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PortalArnInput`<sup>Optional</sup> <a name="PortalArnInput" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.portalArnInput"></a>

```go
func PortalArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `UserAccessLoggingSettingsArnInput`<sup>Optional</sup> <a name="UserAccessLoggingSettingsArnInput" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.userAccessLoggingSettingsArnInput"></a>

```go
func UserAccessLoggingSettingsArnInput() *string
```

- *Type:* *string

---

##### `PortalArn`<sup>Required</sup> <a name="PortalArn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.portalArn"></a>

```go
func PortalArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `UserAccessLoggingSettingsArn`<sup>Required</sup> <a name="UserAccessLoggingSettingsArn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.userAccessLoggingSettingsArn"></a>

```go
func UserAccessLoggingSettingsArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebUserAccessLoggingSettingsAssociationConfig <a name="WorkspaceswebUserAccessLoggingSettingsAssociationConfig" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/workspaceswebuseraccessloggingsettingsassociation"

&workspaceswebuseraccessloggingsettingsassociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PortalArn: *string,
	UserAccessLoggingSettingsArn: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.portalArn">PortalArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_user_access_logging_settings_association#portal_arn WorkspaceswebUserAccessLoggingSettingsAssociation#portal_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.userAccessLoggingSettingsArn">UserAccessLoggingSettingsArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_user_access_logging_settings_association#user_access_logging_settings_arn WorkspaceswebUserAccessLoggingSettingsAssociation#user_access_logging_settings_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PortalArn`<sup>Required</sup> <a name="PortalArn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.portalArn"></a>

```go
PortalArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_user_access_logging_settings_association#portal_arn WorkspaceswebUserAccessLoggingSettingsAssociation#portal_arn}.

---

##### `UserAccessLoggingSettingsArn`<sup>Required</sup> <a name="UserAccessLoggingSettingsArn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.userAccessLoggingSettingsArn"></a>

```go
UserAccessLoggingSettingsArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_user_access_logging_settings_association#user_access_logging_settings_arn WorkspaceswebUserAccessLoggingSettingsAssociation#user_access_logging_settings_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettingsAssociation.WorkspaceswebUserAccessLoggingSettingsAssociationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/workspacesweb_user_access_logging_settings_association#region WorkspaceswebUserAccessLoggingSettingsAssociation#region}

---



