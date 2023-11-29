# `quicksightDashboard` Submodule <a name="`quicksightDashboard` Submodule" id="@cdktf/provider-aws.quicksightDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDashboard <a name="QuicksightDashboard" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard aws_quicksight_dashboard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboard(scope Construct, id *string, config QuicksightDashboardConfig) QuicksightDashboard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig">QuicksightDashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig">QuicksightDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions">PutDashboardPublishOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putSourceEntity">PutSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetDashboardPublishOptions">ResetDashboardPublishOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetSourceEntity">ResetSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetThemeArn">ResetThemeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutDashboardPublishOptions` <a name="PutDashboardPublishOptions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions"></a>

```go
func PutDashboardPublishOptions(value QuicksightDashboardDashboardPublishOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

---

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putParameters"></a>

```go
func PutParameters(value QuicksightDashboardParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putPermissions"></a>

```go
func PutPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceEntity` <a name="PutSourceEntity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putSourceEntity"></a>

```go
func PutSourceEntity(value QuicksightDashboardSourceEntity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putSourceEntity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putTimeouts"></a>

```go
func PutTimeouts(value QuicksightDashboardTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetDashboardPublishOptions` <a name="ResetDashboardPublishOptions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetDashboardPublishOptions"></a>

```go
func ResetDashboardPublishOptions()
```

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetDefinition"></a>

```go
func ResetDefinition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetId"></a>

```go
func ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetSourceEntity` <a name="ResetSourceEntity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetSourceEntity"></a>

```go
func ResetSourceEntity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetThemeArn` <a name="ResetThemeArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetThemeArn"></a>

```go
func ResetThemeArn()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightDashboard resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.QuicksightDashboard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.QuicksightDashboard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.QuicksightDashboard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.QuicksightDashboard_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a QuicksightDashboard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptions">DashboardPublishOptions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference">QuicksightDashboardDashboardPublishOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.definitionInput">DefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lastPublishedTime">LastPublishedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference">QuicksightDashboardParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList">QuicksightDashboardPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntity">SourceEntity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference">QuicksightDashboardSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntityArn">SourceEntityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference">QuicksightDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionNumber">VersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardIdInput">DashboardIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptionsInput">DashboardPublishOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.parametersInput">ParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.permissionsInput">PermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntityInput">SourceEntityInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.themeArnInput">ThemeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionDescriptionInput">VersionDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardId">DashboardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.definition">Definition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.themeArn">ThemeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `DashboardPublishOptions`<sup>Required</sup> <a name="DashboardPublishOptions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptions"></a>

```go
func DashboardPublishOptions() QuicksightDashboardDashboardPublishOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference">QuicksightDashboardDashboardPublishOptionsOutputReference</a>

---

##### `DefinitionInput`<sup>Required</sup> <a name="DefinitionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.definitionInput"></a>

```go
func DefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `LastPublishedTime`<sup>Required</sup> <a name="LastPublishedTime" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lastPublishedTime"></a>

```go
func LastPublishedTime() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.parameters"></a>

```go
func Parameters() QuicksightDashboardParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference">QuicksightDashboardParametersOutputReference</a>

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.permissions"></a>

```go
func Permissions() QuicksightDashboardPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList">QuicksightDashboardPermissionsList</a>

---

##### `SourceEntity`<sup>Required</sup> <a name="SourceEntity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntity"></a>

```go
func SourceEntity() QuicksightDashboardSourceEntityOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference">QuicksightDashboardSourceEntityOutputReference</a>

---

##### `SourceEntityArn`<sup>Required</sup> <a name="SourceEntityArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntityArn"></a>

```go
func SourceEntityArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.timeouts"></a>

```go
func Timeouts() QuicksightDashboardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference">QuicksightDashboardTimeoutsOutputReference</a>

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionNumber"></a>

```go
func VersionNumber() *f64
```

- *Type:* *f64

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `DashboardIdInput`<sup>Optional</sup> <a name="DashboardIdInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardIdInput"></a>

```go
func DashboardIdInput() *string
```

- *Type:* *string

---

##### `DashboardPublishOptionsInput`<sup>Optional</sup> <a name="DashboardPublishOptionsInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptionsInput"></a>

```go
func DashboardPublishOptionsInput() QuicksightDashboardDashboardPublishOptions
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.parametersInput"></a>

```go
func ParametersInput() QuicksightDashboardParameters
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.permissionsInput"></a>

```go
func PermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceEntityInput`<sup>Optional</sup> <a name="SourceEntityInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntityInput"></a>

```go
func SourceEntityInput() QuicksightDashboardSourceEntity
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThemeArnInput`<sup>Optional</sup> <a name="ThemeArnInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.themeArnInput"></a>

```go
func ThemeArnInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionDescriptionInput`<sup>Optional</sup> <a name="VersionDescriptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionDescriptionInput"></a>

```go
func VersionDescriptionInput() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardId"></a>

```go
func DashboardId() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.definition"></a>

```go
func Definition() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThemeArn`<sup>Required</sup> <a name="ThemeArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.themeArn"></a>

```go
func ThemeArn() *string
```

- *Type:* *string

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionDescription"></a>

```go
func VersionDescription() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDashboardConfig <a name="QuicksightDashboardConfig" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DashboardId: *string,
	Name: *string,
	VersionDescription: *string,
	AwsAccountId: *string,
	DashboardPublishOptions: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions,
	Definition: interface{},
	Id: *string,
	Parameters: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardParameters,
	Permissions: interface{},
	SourceEntity: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardSourceEntity,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	ThemeArn: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dashboardId">DashboardId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dashboardPublishOptions">DashboardPublishOptions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | dashboard_publish_options block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.definition">Definition</a></code> | <code>interface{}</code> | definition block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#id QuicksightDashboard#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.permissions">Permissions</a></code> | <code>interface{}</code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.sourceEntity">SourceEntity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | source_entity block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#tags_all QuicksightDashboard#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.themeArn">ThemeArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dashboardId"></a>

```go
DashboardId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.versionDescription"></a>

```go
VersionDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}.

---

##### `DashboardPublishOptions`<sup>Optional</sup> <a name="DashboardPublishOptions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dashboardPublishOptions"></a>

```go
DashboardPublishOptions QuicksightDashboardDashboardPublishOptions
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

dashboard_publish_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#dashboard_publish_options QuicksightDashboard#dashboard_publish_options}

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.definition"></a>

```go
Definition interface{}
```

- *Type:* interface{}

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#definition QuicksightDashboard#definition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#id QuicksightDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.parameters"></a>

```go
Parameters QuicksightDashboardParameters
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#parameters QuicksightDashboard#parameters}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.permissions"></a>

```go
Permissions interface{}
```

- *Type:* interface{}

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#permissions QuicksightDashboard#permissions}

---

##### `SourceEntity`<sup>Optional</sup> <a name="SourceEntity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.sourceEntity"></a>

```go
SourceEntity QuicksightDashboardSourceEntity
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

source_entity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#source_entity QuicksightDashboard#source_entity}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#tags_all QuicksightDashboard#tags_all}.

---

##### `ThemeArn`<sup>Optional</sup> <a name="ThemeArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.themeArn"></a>

```go
ThemeArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.timeouts"></a>

```go
Timeouts QuicksightDashboardTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#timeouts QuicksightDashboard#timeouts}

---

### QuicksightDashboardDashboardPublishOptions <a name="QuicksightDashboardDashboardPublishOptions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptions {
	AdHocFilteringOption: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption,
	DataPointDrillUpDownOption: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption,
	DataPointMenuLabelOption: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption,
	DataPointTooltipOption: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption,
	ExportToCsvOption: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption,
	ExportWithHiddenFieldsOption: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption,
	SheetControlsOption: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption,
	SheetLayoutElementMaximizationOption: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption,
	VisualAxisSortOption: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption,
	VisualMenuOption: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.adHocFilteringOption">AdHocFilteringOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | ad_hoc_filtering_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointDrillUpDownOption">DataPointDrillUpDownOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a></code> | data_point_drill_up_down_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointMenuLabelOption">DataPointMenuLabelOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a></code> | data_point_menu_label_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointTooltipOption">DataPointTooltipOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a></code> | data_point_tooltip_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportToCsvOption">ExportToCsvOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | export_to_csv_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportWithHiddenFieldsOption">ExportWithHiddenFieldsOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a></code> | export_with_hidden_fields_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetControlsOption">SheetControlsOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | sheet_controls_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetLayoutElementMaximizationOption">SheetLayoutElementMaximizationOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a></code> | sheet_layout_element_maximization_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.visualAxisSortOption">VisualAxisSortOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a></code> | visual_axis_sort_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.visualMenuOption">VisualMenuOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a></code> | visual_menu_option block. |

---

##### `AdHocFilteringOption`<sup>Optional</sup> <a name="AdHocFilteringOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.adHocFilteringOption"></a>

```go
AdHocFilteringOption QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

ad_hoc_filtering_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#ad_hoc_filtering_option QuicksightDashboard#ad_hoc_filtering_option}

---

##### `DataPointDrillUpDownOption`<sup>Optional</sup> <a name="DataPointDrillUpDownOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointDrillUpDownOption"></a>

```go
DataPointDrillUpDownOption QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a>

data_point_drill_up_down_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#data_point_drill_up_down_option QuicksightDashboard#data_point_drill_up_down_option}

---

##### `DataPointMenuLabelOption`<sup>Optional</sup> <a name="DataPointMenuLabelOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointMenuLabelOption"></a>

```go
DataPointMenuLabelOption QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a>

data_point_menu_label_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#data_point_menu_label_option QuicksightDashboard#data_point_menu_label_option}

---

##### `DataPointTooltipOption`<sup>Optional</sup> <a name="DataPointTooltipOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointTooltipOption"></a>

```go
DataPointTooltipOption QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a>

data_point_tooltip_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#data_point_tooltip_option QuicksightDashboard#data_point_tooltip_option}

---

##### `ExportToCsvOption`<sup>Optional</sup> <a name="ExportToCsvOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportToCsvOption"></a>

```go
ExportToCsvOption QuicksightDashboardDashboardPublishOptionsExportToCsvOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

export_to_csv_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#export_to_csv_option QuicksightDashboard#export_to_csv_option}

---

##### `ExportWithHiddenFieldsOption`<sup>Optional</sup> <a name="ExportWithHiddenFieldsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportWithHiddenFieldsOption"></a>

```go
ExportWithHiddenFieldsOption QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a>

export_with_hidden_fields_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#export_with_hidden_fields_option QuicksightDashboard#export_with_hidden_fields_option}

---

##### `SheetControlsOption`<sup>Optional</sup> <a name="SheetControlsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetControlsOption"></a>

```go
SheetControlsOption QuicksightDashboardDashboardPublishOptionsSheetControlsOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

sheet_controls_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#sheet_controls_option QuicksightDashboard#sheet_controls_option}

---

##### `SheetLayoutElementMaximizationOption`<sup>Optional</sup> <a name="SheetLayoutElementMaximizationOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetLayoutElementMaximizationOption"></a>

```go
SheetLayoutElementMaximizationOption QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a>

sheet_layout_element_maximization_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#sheet_layout_element_maximization_option QuicksightDashboard#sheet_layout_element_maximization_option}

---

##### `VisualAxisSortOption`<sup>Optional</sup> <a name="VisualAxisSortOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.visualAxisSortOption"></a>

```go
VisualAxisSortOption QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a>

visual_axis_sort_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#visual_axis_sort_option QuicksightDashboard#visual_axis_sort_option}

---

##### `VisualMenuOption`<sup>Optional</sup> <a name="VisualMenuOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.visualMenuOption"></a>

```go
VisualMenuOption QuicksightDashboardDashboardPublishOptionsVisualMenuOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a>

visual_menu_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#visual_menu_option QuicksightDashboard#visual_menu_option}

---

### QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption <a name="QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption {
	AvailabilityStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.property.availabilityStatus"></a>

```go
AvailabilityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption <a name="QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption {
	AvailabilityStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption.property.availabilityStatus"></a>

```go
AvailabilityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption <a name="QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption {
	AvailabilityStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption.property.availabilityStatus"></a>

```go
AvailabilityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption <a name="QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption {
	AvailabilityStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption.property.availabilityStatus"></a>

```go
AvailabilityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsExportToCsvOption <a name="QuicksightDashboardDashboardPublishOptionsExportToCsvOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption {
	AvailabilityStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.property.availabilityStatus"></a>

```go
AvailabilityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption <a name="QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption {
	AvailabilityStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption.property.availabilityStatus"></a>

```go
AvailabilityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsSheetControlsOption <a name="QuicksightDashboardDashboardPublishOptionsSheetControlsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption {
	VisibilityState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.property.visibilityState">VisibilityState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}. |

---

##### `VisibilityState`<sup>Optional</sup> <a name="VisibilityState" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.property.visibilityState"></a>

```go
VisibilityState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}.

---

### QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption <a name="QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption {
	AvailabilityStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption.property.availabilityStatus"></a>

```go
AvailabilityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption <a name="QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption {
	AvailabilityStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption.property.availabilityStatus"></a>

```go
AvailabilityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsVisualMenuOption <a name="QuicksightDashboardDashboardPublishOptionsVisualMenuOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption {
	AvailabilityStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption.property.availabilityStatus"></a>

```go
AvailabilityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardParameters <a name="QuicksightDashboardParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardParameters {
	DateTimeParameters: interface{},
	DecimalParameters: interface{},
	IntegerParameters: interface{},
	StringParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.dateTimeParameters">DateTimeParameters</a></code> | <code>interface{}</code> | date_time_parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.decimalParameters">DecimalParameters</a></code> | <code>interface{}</code> | decimal_parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.integerParameters">IntegerParameters</a></code> | <code>interface{}</code> | integer_parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.stringParameters">StringParameters</a></code> | <code>interface{}</code> | string_parameters block. |

---

##### `DateTimeParameters`<sup>Optional</sup> <a name="DateTimeParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.dateTimeParameters"></a>

```go
DateTimeParameters interface{}
```

- *Type:* interface{}

date_time_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#date_time_parameters QuicksightDashboard#date_time_parameters}

---

##### `DecimalParameters`<sup>Optional</sup> <a name="DecimalParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.decimalParameters"></a>

```go
DecimalParameters interface{}
```

- *Type:* interface{}

decimal_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#decimal_parameters QuicksightDashboard#decimal_parameters}

---

##### `IntegerParameters`<sup>Optional</sup> <a name="IntegerParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.integerParameters"></a>

```go
IntegerParameters interface{}
```

- *Type:* interface{}

integer_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#integer_parameters QuicksightDashboard#integer_parameters}

---

##### `StringParameters`<sup>Optional</sup> <a name="StringParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.stringParameters"></a>

```go
StringParameters interface{}
```

- *Type:* interface{}

string_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#string_parameters QuicksightDashboard#string_parameters}

---

### QuicksightDashboardParametersDateTimeParameters <a name="QuicksightDashboardParametersDateTimeParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardParametersDateTimeParameters {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}.

---

### QuicksightDashboardParametersDecimalParameters <a name="QuicksightDashboardParametersDecimalParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardParametersDecimalParameters {
	Name: *string,
	Values: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.values">Values</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.values"></a>

```go
Values *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}.

---

### QuicksightDashboardParametersIntegerParameters <a name="QuicksightDashboardParametersIntegerParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardParametersIntegerParameters {
	Name: *string,
	Values: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.values">Values</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.values"></a>

```go
Values *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}.

---

### QuicksightDashboardParametersStringParameters <a name="QuicksightDashboardParametersStringParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardParametersStringParameters {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}.

---

### QuicksightDashboardPermissions <a name="QuicksightDashboardPermissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardPermissions {
	Actions: *[]*string,
	Principal: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.property.actions">Actions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#actions QuicksightDashboard#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#principal QuicksightDashboard#principal}. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#actions QuicksightDashboard#actions}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#principal QuicksightDashboard#principal}.

---

### QuicksightDashboardSourceEntity <a name="QuicksightDashboardSourceEntity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardSourceEntity {
	SourceTemplate: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity.property.sourceTemplate">SourceTemplate</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | source_template block. |

---

##### `SourceTemplate`<sup>Optional</sup> <a name="SourceTemplate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity.property.sourceTemplate"></a>

```go
SourceTemplate QuicksightDashboardSourceEntitySourceTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

source_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#source_template QuicksightDashboard#source_template}

---

### QuicksightDashboardSourceEntitySourceTemplate <a name="QuicksightDashboardSourceEntitySourceTemplate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardSourceEntitySourceTemplate {
	Arn: *string,
	DataSetReferences: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#arn QuicksightDashboard#arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.dataSetReferences">DataSetReferences</a></code> | <code>interface{}</code> | data_set_references block. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#arn QuicksightDashboard#arn}.

---

##### `DataSetReferences`<sup>Required</sup> <a name="DataSetReferences" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.dataSetReferences"></a>

```go
DataSetReferences interface{}
```

- *Type:* interface{}

data_set_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#data_set_references QuicksightDashboard#data_set_references}

---

### QuicksightDashboardSourceEntitySourceTemplateDataSetReferences <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferences" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences {
	DataSetArn: *string,
	DataSetPlaceholder: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetArn">DataSetArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#data_set_arn QuicksightDashboard#data_set_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder">DataSetPlaceholder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#data_set_placeholder QuicksightDashboard#data_set_placeholder}. |

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetArn"></a>

```go
DataSetArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#data_set_arn QuicksightDashboard#data_set_arn}.

---

##### `DataSetPlaceholder`<sup>Required</sup> <a name="DataSetPlaceholder" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder"></a>

```go
DataSetPlaceholder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#data_set_placeholder QuicksightDashboard#data_set_placeholder}.

---

### QuicksightDashboardTimeouts <a name="QuicksightDashboardTimeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#create QuicksightDashboard#create}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#delete QuicksightDashboard#delete}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#update QuicksightDashboard#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#create QuicksightDashboard#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#delete QuicksightDashboard#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.28.0/docs/resources/quicksight_dashboard#update QuicksightDashboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resetAvailabilityStatus"></a>

```go
func ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatusInput"></a>

```go
func AvailabilityStatusInput() *string
```

- *Type:* *string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatus"></a>

```go
func AvailabilityStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

---


### QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resetAvailabilityStatus"></a>

```go
func ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.availabilityStatusInput"></a>

```go
func AvailabilityStatusInput() *string
```

- *Type:* *string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.availabilityStatus"></a>

```go
func AvailabilityStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a>

---


### QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resetAvailabilityStatus"></a>

```go
func ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.availabilityStatusInput"></a>

```go
func AvailabilityStatusInput() *string
```

- *Type:* *string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.availabilityStatus"></a>

```go
func AvailabilityStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a>

---


### QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resetAvailabilityStatus"></a>

```go
func ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.availabilityStatusInput"></a>

```go
func AvailabilityStatusInput() *string
```

- *Type:* *string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.availabilityStatus"></a>

```go
func AvailabilityStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a>

---


### QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resetAvailabilityStatus"></a>

```go
func ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatusInput"></a>

```go
func AvailabilityStatusInput() *string
```

- *Type:* *string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatus"></a>

```go
func AvailabilityStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardDashboardPublishOptionsExportToCsvOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

---


### QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resetAvailabilityStatus"></a>

```go
func ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.availabilityStatusInput"></a>

```go
func AvailabilityStatusInput() *string
```

- *Type:* *string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.availabilityStatus"></a>

```go
func AvailabilityStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a>

---


### QuicksightDashboardDashboardPublishOptionsOutputReference <a name="QuicksightDashboardDashboardPublishOptionsOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption">PutAdHocFilteringOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointDrillUpDownOption">PutDataPointDrillUpDownOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointMenuLabelOption">PutDataPointMenuLabelOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointTooltipOption">PutDataPointTooltipOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption">PutExportToCsvOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportWithHiddenFieldsOption">PutExportWithHiddenFieldsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption">PutSheetControlsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetLayoutElementMaximizationOption">PutSheetLayoutElementMaximizationOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualAxisSortOption">PutVisualAxisSortOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualMenuOption">PutVisualMenuOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetAdHocFilteringOption">ResetAdHocFilteringOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointDrillUpDownOption">ResetDataPointDrillUpDownOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointMenuLabelOption">ResetDataPointMenuLabelOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointTooltipOption">ResetDataPointTooltipOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportToCsvOption">ResetExportToCsvOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportWithHiddenFieldsOption">ResetExportWithHiddenFieldsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetControlsOption">ResetSheetControlsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetLayoutElementMaximizationOption">ResetSheetLayoutElementMaximizationOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetVisualAxisSortOption">ResetVisualAxisSortOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetVisualMenuOption">ResetVisualMenuOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdHocFilteringOption` <a name="PutAdHocFilteringOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption"></a>

```go
func PutAdHocFilteringOption(value QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

---

##### `PutDataPointDrillUpDownOption` <a name="PutDataPointDrillUpDownOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointDrillUpDownOption"></a>

```go
func PutDataPointDrillUpDownOption(value QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointDrillUpDownOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a>

---

##### `PutDataPointMenuLabelOption` <a name="PutDataPointMenuLabelOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointMenuLabelOption"></a>

```go
func PutDataPointMenuLabelOption(value QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointMenuLabelOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a>

---

##### `PutDataPointTooltipOption` <a name="PutDataPointTooltipOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointTooltipOption"></a>

```go
func PutDataPointTooltipOption(value QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointTooltipOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a>

---

##### `PutExportToCsvOption` <a name="PutExportToCsvOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption"></a>

```go
func PutExportToCsvOption(value QuicksightDashboardDashboardPublishOptionsExportToCsvOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

---

##### `PutExportWithHiddenFieldsOption` <a name="PutExportWithHiddenFieldsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportWithHiddenFieldsOption"></a>

```go
func PutExportWithHiddenFieldsOption(value QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportWithHiddenFieldsOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a>

---

##### `PutSheetControlsOption` <a name="PutSheetControlsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption"></a>

```go
func PutSheetControlsOption(value QuicksightDashboardDashboardPublishOptionsSheetControlsOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

---

##### `PutSheetLayoutElementMaximizationOption` <a name="PutSheetLayoutElementMaximizationOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetLayoutElementMaximizationOption"></a>

```go
func PutSheetLayoutElementMaximizationOption(value QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetLayoutElementMaximizationOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a>

---

##### `PutVisualAxisSortOption` <a name="PutVisualAxisSortOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualAxisSortOption"></a>

```go
func PutVisualAxisSortOption(value QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualAxisSortOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a>

---

##### `PutVisualMenuOption` <a name="PutVisualMenuOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualMenuOption"></a>

```go
func PutVisualMenuOption(value QuicksightDashboardDashboardPublishOptionsVisualMenuOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualMenuOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a>

---

##### `ResetAdHocFilteringOption` <a name="ResetAdHocFilteringOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetAdHocFilteringOption"></a>

```go
func ResetAdHocFilteringOption()
```

##### `ResetDataPointDrillUpDownOption` <a name="ResetDataPointDrillUpDownOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointDrillUpDownOption"></a>

```go
func ResetDataPointDrillUpDownOption()
```

##### `ResetDataPointMenuLabelOption` <a name="ResetDataPointMenuLabelOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointMenuLabelOption"></a>

```go
func ResetDataPointMenuLabelOption()
```

##### `ResetDataPointTooltipOption` <a name="ResetDataPointTooltipOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointTooltipOption"></a>

```go
func ResetDataPointTooltipOption()
```

##### `ResetExportToCsvOption` <a name="ResetExportToCsvOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportToCsvOption"></a>

```go
func ResetExportToCsvOption()
```

##### `ResetExportWithHiddenFieldsOption` <a name="ResetExportWithHiddenFieldsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportWithHiddenFieldsOption"></a>

```go
func ResetExportWithHiddenFieldsOption()
```

##### `ResetSheetControlsOption` <a name="ResetSheetControlsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetControlsOption"></a>

```go
func ResetSheetControlsOption()
```

##### `ResetSheetLayoutElementMaximizationOption` <a name="ResetSheetLayoutElementMaximizationOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetLayoutElementMaximizationOption"></a>

```go
func ResetSheetLayoutElementMaximizationOption()
```

##### `ResetVisualAxisSortOption` <a name="ResetVisualAxisSortOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetVisualAxisSortOption"></a>

```go
func ResetVisualAxisSortOption()
```

##### `ResetVisualMenuOption` <a name="ResetVisualMenuOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetVisualMenuOption"></a>

```go
func ResetVisualMenuOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOption">AdHocFilteringOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointDrillUpDownOption">DataPointDrillUpDownOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointMenuLabelOption">DataPointMenuLabelOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointTooltipOption">DataPointTooltipOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOption">ExportToCsvOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportWithHiddenFieldsOption">ExportWithHiddenFieldsOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOption">SheetControlsOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetLayoutElementMaximizationOption">SheetLayoutElementMaximizationOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualAxisSortOption">VisualAxisSortOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualMenuOption">VisualMenuOption</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference">QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOptionInput">AdHocFilteringOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointDrillUpDownOptionInput">DataPointDrillUpDownOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointMenuLabelOptionInput">DataPointMenuLabelOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointTooltipOptionInput">DataPointTooltipOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOptionInput">ExportToCsvOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportWithHiddenFieldsOptionInput">ExportWithHiddenFieldsOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOptionInput">SheetControlsOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetLayoutElementMaximizationOptionInput">SheetLayoutElementMaximizationOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualAxisSortOptionInput">VisualAxisSortOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualMenuOptionInput">VisualMenuOptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdHocFilteringOption`<sup>Required</sup> <a name="AdHocFilteringOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOption"></a>

```go
func AdHocFilteringOption() QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference</a>

---

##### `DataPointDrillUpDownOption`<sup>Required</sup> <a name="DataPointDrillUpDownOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointDrillUpDownOption"></a>

```go
func DataPointDrillUpDownOption() QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference</a>

---

##### `DataPointMenuLabelOption`<sup>Required</sup> <a name="DataPointMenuLabelOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointMenuLabelOption"></a>

```go
func DataPointMenuLabelOption() QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference</a>

---

##### `DataPointTooltipOption`<sup>Required</sup> <a name="DataPointTooltipOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointTooltipOption"></a>

```go
func DataPointTooltipOption() QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference</a>

---

##### `ExportToCsvOption`<sup>Required</sup> <a name="ExportToCsvOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOption"></a>

```go
func ExportToCsvOption() QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference</a>

---

##### `ExportWithHiddenFieldsOption`<sup>Required</sup> <a name="ExportWithHiddenFieldsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportWithHiddenFieldsOption"></a>

```go
func ExportWithHiddenFieldsOption() QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference</a>

---

##### `SheetControlsOption`<sup>Required</sup> <a name="SheetControlsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOption"></a>

```go
func SheetControlsOption() QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference</a>

---

##### `SheetLayoutElementMaximizationOption`<sup>Required</sup> <a name="SheetLayoutElementMaximizationOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetLayoutElementMaximizationOption"></a>

```go
func SheetLayoutElementMaximizationOption() QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference</a>

---

##### `VisualAxisSortOption`<sup>Required</sup> <a name="VisualAxisSortOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualAxisSortOption"></a>

```go
func VisualAxisSortOption() QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference</a>

---

##### `VisualMenuOption`<sup>Required</sup> <a name="VisualMenuOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualMenuOption"></a>

```go
func VisualMenuOption() QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference">QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference</a>

---

##### `AdHocFilteringOptionInput`<sup>Optional</sup> <a name="AdHocFilteringOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOptionInput"></a>

```go
func AdHocFilteringOptionInput() QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

---

##### `DataPointDrillUpDownOptionInput`<sup>Optional</sup> <a name="DataPointDrillUpDownOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointDrillUpDownOptionInput"></a>

```go
func DataPointDrillUpDownOptionInput() QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a>

---

##### `DataPointMenuLabelOptionInput`<sup>Optional</sup> <a name="DataPointMenuLabelOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointMenuLabelOptionInput"></a>

```go
func DataPointMenuLabelOptionInput() QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a>

---

##### `DataPointTooltipOptionInput`<sup>Optional</sup> <a name="DataPointTooltipOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointTooltipOptionInput"></a>

```go
func DataPointTooltipOptionInput() QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a>

---

##### `ExportToCsvOptionInput`<sup>Optional</sup> <a name="ExportToCsvOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOptionInput"></a>

```go
func ExportToCsvOptionInput() QuicksightDashboardDashboardPublishOptionsExportToCsvOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

---

##### `ExportWithHiddenFieldsOptionInput`<sup>Optional</sup> <a name="ExportWithHiddenFieldsOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportWithHiddenFieldsOptionInput"></a>

```go
func ExportWithHiddenFieldsOptionInput() QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a>

---

##### `SheetControlsOptionInput`<sup>Optional</sup> <a name="SheetControlsOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOptionInput"></a>

```go
func SheetControlsOptionInput() QuicksightDashboardDashboardPublishOptionsSheetControlsOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

---

##### `SheetLayoutElementMaximizationOptionInput`<sup>Optional</sup> <a name="SheetLayoutElementMaximizationOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetLayoutElementMaximizationOptionInput"></a>

```go
func SheetLayoutElementMaximizationOptionInput() QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a>

---

##### `VisualAxisSortOptionInput`<sup>Optional</sup> <a name="VisualAxisSortOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualAxisSortOptionInput"></a>

```go
func VisualAxisSortOptionInput() QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a>

---

##### `VisualMenuOptionInput`<sup>Optional</sup> <a name="VisualMenuOptionInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualMenuOptionInput"></a>

```go
func VisualMenuOptionInput() QuicksightDashboardDashboardPublishOptionsVisualMenuOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardDashboardPublishOptions
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

---


### QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resetVisibilityState">ResetVisibilityState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVisibilityState` <a name="ResetVisibilityState" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resetVisibilityState"></a>

```go
func ResetVisibilityState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityStateInput">VisibilityStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityState">VisibilityState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VisibilityStateInput`<sup>Optional</sup> <a name="VisibilityStateInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityStateInput"></a>

```go
func VisibilityStateInput() *string
```

- *Type:* *string

---

##### `VisibilityState`<sup>Required</sup> <a name="VisibilityState" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityState"></a>

```go
func VisibilityState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardDashboardPublishOptionsSheetControlsOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

---


### QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resetAvailabilityStatus"></a>

```go
func ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.availabilityStatusInput"></a>

```go
func AvailabilityStatusInput() *string
```

- *Type:* *string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.availabilityStatus"></a>

```go
func AvailabilityStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a>

---


### QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resetAvailabilityStatus"></a>

```go
func ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.availabilityStatusInput"></a>

```go
func AvailabilityStatusInput() *string
```

- *Type:* *string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.availabilityStatus"></a>

```go
func AvailabilityStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a>

---


### QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resetAvailabilityStatus"></a>

```go
func ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.availabilityStatusInput"></a>

```go
func AvailabilityStatusInput() *string
```

- *Type:* *string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.availabilityStatus"></a>

```go
func AvailabilityStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardDashboardPublishOptionsVisualMenuOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a>

---


### QuicksightDashboardParametersDateTimeParametersList <a name="QuicksightDashboardParametersDateTimeParametersList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersDateTimeParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardParametersDateTimeParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get"></a>

```go
func Get(index *f64) QuicksightDashboardParametersDateTimeParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersDateTimeParametersOutputReference <a name="QuicksightDashboardParametersDateTimeParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersDateTimeParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardParametersDateTimeParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersDecimalParametersList <a name="QuicksightDashboardParametersDecimalParametersList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersDecimalParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardParametersDecimalParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get"></a>

```go
func Get(index *f64) QuicksightDashboardParametersDecimalParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersDecimalParametersOutputReference <a name="QuicksightDashboardParametersDecimalParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersDecimalParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardParametersDecimalParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersIntegerParametersList <a name="QuicksightDashboardParametersIntegerParametersList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersIntegerParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardParametersIntegerParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get"></a>

```go
func Get(index *f64) QuicksightDashboardParametersIntegerParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersIntegerParametersOutputReference <a name="QuicksightDashboardParametersIntegerParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersIntegerParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardParametersIntegerParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersOutputReference <a name="QuicksightDashboardParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters">PutDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters">PutDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters">PutIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters">PutStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDateTimeParameters">ResetDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDecimalParameters">ResetDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetIntegerParameters">ResetIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetStringParameters">ResetStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateTimeParameters` <a name="PutDateTimeParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters"></a>

```go
func PutDateTimeParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDecimalParameters` <a name="PutDecimalParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters"></a>

```go
func PutDecimalParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIntegerParameters` <a name="PutIntegerParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters"></a>

```go
func PutIntegerParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringParameters` <a name="PutStringParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters"></a>

```go
func PutStringParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDateTimeParameters` <a name="ResetDateTimeParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDateTimeParameters"></a>

```go
func ResetDateTimeParameters()
```

##### `ResetDecimalParameters` <a name="ResetDecimalParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDecimalParameters"></a>

```go
func ResetDecimalParameters()
```

##### `ResetIntegerParameters` <a name="ResetIntegerParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetIntegerParameters"></a>

```go
func ResetIntegerParameters()
```

##### `ResetStringParameters` <a name="ResetStringParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetStringParameters"></a>

```go
func ResetStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParameters">DateTimeParameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList">QuicksightDashboardParametersDateTimeParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParameters">DecimalParameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList">QuicksightDashboardParametersDecimalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParameters">IntegerParameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList">QuicksightDashboardParametersIntegerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParameters">StringParameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList">QuicksightDashboardParametersStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParametersInput">DateTimeParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParametersInput">DecimalParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParametersInput">IntegerParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParametersInput">StringParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateTimeParameters`<sup>Required</sup> <a name="DateTimeParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParameters"></a>

```go
func DateTimeParameters() QuicksightDashboardParametersDateTimeParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList">QuicksightDashboardParametersDateTimeParametersList</a>

---

##### `DecimalParameters`<sup>Required</sup> <a name="DecimalParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParameters"></a>

```go
func DecimalParameters() QuicksightDashboardParametersDecimalParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList">QuicksightDashboardParametersDecimalParametersList</a>

---

##### `IntegerParameters`<sup>Required</sup> <a name="IntegerParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParameters"></a>

```go
func IntegerParameters() QuicksightDashboardParametersIntegerParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList">QuicksightDashboardParametersIntegerParametersList</a>

---

##### `StringParameters`<sup>Required</sup> <a name="StringParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParameters"></a>

```go
func StringParameters() QuicksightDashboardParametersStringParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList">QuicksightDashboardParametersStringParametersList</a>

---

##### `DateTimeParametersInput`<sup>Optional</sup> <a name="DateTimeParametersInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParametersInput"></a>

```go
func DateTimeParametersInput() interface{}
```

- *Type:* interface{}

---

##### `DecimalParametersInput`<sup>Optional</sup> <a name="DecimalParametersInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParametersInput"></a>

```go
func DecimalParametersInput() interface{}
```

- *Type:* interface{}

---

##### `IntegerParametersInput`<sup>Optional</sup> <a name="IntegerParametersInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParametersInput"></a>

```go
func IntegerParametersInput() interface{}
```

- *Type:* interface{}

---

##### `StringParametersInput`<sup>Optional</sup> <a name="StringParametersInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParametersInput"></a>

```go
func StringParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardParameters
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

---


### QuicksightDashboardParametersStringParametersList <a name="QuicksightDashboardParametersStringParametersList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersStringParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardParametersStringParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get"></a>

```go
func Get(index *f64) QuicksightDashboardParametersStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersStringParametersOutputReference <a name="QuicksightDashboardParametersStringParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersStringParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardParametersStringParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardPermissionsList <a name="QuicksightDashboardPermissionsList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.get"></a>

```go
func Get(index *f64) QuicksightDashboardPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardPermissionsOutputReference <a name="QuicksightDashboardPermissionsOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardSourceEntityOutputReference <a name="QuicksightDashboardSourceEntityOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardSourceEntityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardSourceEntityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate">PutSourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resetSourceTemplate">ResetSourceTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceTemplate` <a name="PutSourceTemplate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate"></a>

```go
func PutSourceTemplate(value QuicksightDashboardSourceEntitySourceTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

---

##### `ResetSourceTemplate` <a name="ResetSourceTemplate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resetSourceTemplate"></a>

```go
func ResetSourceTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplate">SourceTemplate</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference">QuicksightDashboardSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplateInput">SourceTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceTemplate`<sup>Required</sup> <a name="SourceTemplate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplate"></a>

```go
func SourceTemplate() QuicksightDashboardSourceEntitySourceTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference">QuicksightDashboardSourceEntitySourceTemplateOutputReference</a>

---

##### `SourceTemplateInput`<sup>Optional</sup> <a name="SourceTemplateInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplateInput"></a>

```go
func SourceTemplateInput() QuicksightDashboardSourceEntitySourceTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardSourceEntity
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

---


### QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get"></a>

```go
func Get(index *f64) QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput">DataSetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput">DataSetPlaceholderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder">DataSetPlaceholder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSetArnInput`<sup>Optional</sup> <a name="DataSetArnInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput"></a>

```go
func DataSetArnInput() *string
```

- *Type:* *string

---

##### `DataSetPlaceholderInput`<sup>Optional</sup> <a name="DataSetPlaceholderInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput"></a>

```go
func DataSetPlaceholderInput() *string
```

- *Type:* *string

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn"></a>

```go
func DataSetArn() *string
```

- *Type:* *string

---

##### `DataSetPlaceholder`<sup>Required</sup> <a name="DataSetPlaceholder" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```go
func DataSetPlaceholder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardSourceEntitySourceTemplateOutputReference <a name="QuicksightDashboardSourceEntitySourceTemplateOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardSourceEntitySourceTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardSourceEntitySourceTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences">PutDataSetReferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSetReferences` <a name="PutDataSetReferences" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences"></a>

```go
func PutDataSetReferences(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferences">DataSetReferences</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList">QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput">DataSetReferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSetReferences`<sup>Required</sup> <a name="DataSetReferences" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferences"></a>

```go
func DataSetReferences() QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList">QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `DataSetReferencesInput`<sup>Optional</sup> <a name="DataSetReferencesInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput"></a>

```go
func DataSetReferencesInput() interface{}
```

- *Type:* interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardSourceEntitySourceTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

---


### QuicksightDashboardTimeoutsOutputReference <a name="QuicksightDashboardTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



