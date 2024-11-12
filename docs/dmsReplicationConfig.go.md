# `dmsReplicationConfig` Submodule <a name="`dmsReplicationConfig` Submodule" id="@cdktf/provider-aws.dmsReplicationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationConfig <a name="DmsReplicationConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config aws_dms_replication_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationconfig"

dmsreplicationconfig.NewDmsReplicationConfig(scope Construct, id *string, config DmsReplicationConfigConfig) DmsReplicationConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig">DmsReplicationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig">DmsReplicationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig">PutComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetReplicationSettings">ResetReplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetResourceIdentifier">ResetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetStartReplication">ResetStartReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetSupplementalSettings">ResetSupplementalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputeConfig` <a name="PutComputeConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig"></a>

```go
func PutComputeConfig(value DmsReplicationConfigComputeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts"></a>

```go
func PutTimeouts(value DmsReplicationConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetReplicationSettings` <a name="ResetReplicationSettings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetReplicationSettings"></a>

```go
func ResetReplicationSettings()
```

##### `ResetResourceIdentifier` <a name="ResetResourceIdentifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetResourceIdentifier"></a>

```go
func ResetResourceIdentifier()
```

##### `ResetStartReplication` <a name="ResetStartReplication" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetStartReplication"></a>

```go
func ResetStartReplication()
```

##### `ResetSupplementalSettings` <a name="ResetSupplementalSettings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetSupplementalSettings"></a>

```go
func ResetSupplementalSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DmsReplicationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationconfig"

dmsreplicationconfig.DmsReplicationConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationconfig"

dmsreplicationconfig.DmsReplicationConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationconfig"

dmsreplicationconfig.DmsReplicationConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationconfig"

dmsreplicationconfig.DmsReplicationConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DmsReplicationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DmsReplicationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DmsReplicationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DmsReplicationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfig">ComputeConfig</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference">DmsReplicationConfigComputeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference">DmsReplicationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfigInput">ComputeConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifierInput">ReplicationConfigIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettingsInput">ReplicationSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationTypeInput">ReplicationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArnInput">SourceEndpointArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplicationInput">StartReplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettingsInput">SupplementalSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappingsInput">TableMappingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArnInput">TargetEndpointArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifier">ReplicationConfigIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettings">ReplicationSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationType">ReplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArn">SourceEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplication">StartReplication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettings">SupplementalSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappings">TableMappings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArn">TargetEndpointArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ComputeConfig`<sup>Required</sup> <a name="ComputeConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfig"></a>

```go
func ComputeConfig() DmsReplicationConfigComputeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference">DmsReplicationConfigComputeConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeouts"></a>

```go
func Timeouts() DmsReplicationConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference">DmsReplicationConfigTimeoutsOutputReference</a>

---

##### `ComputeConfigInput`<sup>Optional</sup> <a name="ComputeConfigInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfigInput"></a>

```go
func ComputeConfigInput() DmsReplicationConfigComputeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ReplicationConfigIdentifierInput`<sup>Optional</sup> <a name="ReplicationConfigIdentifierInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifierInput"></a>

```go
func ReplicationConfigIdentifierInput() *string
```

- *Type:* *string

---

##### `ReplicationSettingsInput`<sup>Optional</sup> <a name="ReplicationSettingsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettingsInput"></a>

```go
func ReplicationSettingsInput() *string
```

- *Type:* *string

---

##### `ReplicationTypeInput`<sup>Optional</sup> <a name="ReplicationTypeInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationTypeInput"></a>

```go
func ReplicationTypeInput() *string
```

- *Type:* *string

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifierInput"></a>

```go
func ResourceIdentifierInput() *string
```

- *Type:* *string

---

##### `SourceEndpointArnInput`<sup>Optional</sup> <a name="SourceEndpointArnInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArnInput"></a>

```go
func SourceEndpointArnInput() *string
```

- *Type:* *string

---

##### `StartReplicationInput`<sup>Optional</sup> <a name="StartReplicationInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplicationInput"></a>

```go
func StartReplicationInput() interface{}
```

- *Type:* interface{}

---

##### `SupplementalSettingsInput`<sup>Optional</sup> <a name="SupplementalSettingsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettingsInput"></a>

```go
func SupplementalSettingsInput() *string
```

- *Type:* *string

---

##### `TableMappingsInput`<sup>Optional</sup> <a name="TableMappingsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappingsInput"></a>

```go
func TableMappingsInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetEndpointArnInput`<sup>Optional</sup> <a name="TargetEndpointArnInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArnInput"></a>

```go
func TargetEndpointArnInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReplicationConfigIdentifier`<sup>Required</sup> <a name="ReplicationConfigIdentifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifier"></a>

```go
func ReplicationConfigIdentifier() *string
```

- *Type:* *string

---

##### `ReplicationSettings`<sup>Required</sup> <a name="ReplicationSettings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettings"></a>

```go
func ReplicationSettings() *string
```

- *Type:* *string

---

##### `ReplicationType`<sup>Required</sup> <a name="ReplicationType" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationType"></a>

```go
func ReplicationType() *string
```

- *Type:* *string

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifier"></a>

```go
func ResourceIdentifier() *string
```

- *Type:* *string

---

##### `SourceEndpointArn`<sup>Required</sup> <a name="SourceEndpointArn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArn"></a>

```go
func SourceEndpointArn() *string
```

- *Type:* *string

---

##### `StartReplication`<sup>Required</sup> <a name="StartReplication" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplication"></a>

```go
func StartReplication() interface{}
```

- *Type:* interface{}

---

##### `SupplementalSettings`<sup>Required</sup> <a name="SupplementalSettings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettings"></a>

```go
func SupplementalSettings() *string
```

- *Type:* *string

---

##### `TableMappings`<sup>Required</sup> <a name="TableMappings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappings"></a>

```go
func TableMappings() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetEndpointArn`<sup>Required</sup> <a name="TargetEndpointArn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArn"></a>

```go
func TargetEndpointArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationConfigComputeConfig <a name="DmsReplicationConfigComputeConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationconfig"

&dmsreplicationconfig.DmsReplicationConfigComputeConfig {
	ReplicationSubnetGroupId: *string,
	AvailabilityZone: *string,
	DnsNameServers: *string,
	KmsKeyId: *string,
	MaxCapacityUnits: *f64,
	MinCapacityUnits: *f64,
	MultiAz: interface{},
	PreferredMaintenanceWindow: *string,
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.replicationSubnetGroupId">ReplicationSubnetGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.dnsNameServers">DnsNameServers</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.maxCapacityUnits">MaxCapacityUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.minCapacityUnits">MinCapacityUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.multiAz">MultiAz</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}. |

---

##### `ReplicationSubnetGroupId`<sup>Required</sup> <a name="ReplicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.replicationSubnetGroupId"></a>

```go
ReplicationSubnetGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}.

---

##### `DnsNameServers`<sup>Optional</sup> <a name="DnsNameServers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.dnsNameServers"></a>

```go
DnsNameServers *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}.

---

##### `MaxCapacityUnits`<sup>Optional</sup> <a name="MaxCapacityUnits" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.maxCapacityUnits"></a>

```go
MaxCapacityUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}.

---

##### `MinCapacityUnits`<sup>Optional</sup> <a name="MinCapacityUnits" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.minCapacityUnits"></a>

```go
MinCapacityUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}.

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.multiAz"></a>

```go
MultiAz interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}.

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}.

---

### DmsReplicationConfigConfig <a name="DmsReplicationConfigConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationconfig"

&dmsreplicationconfig.DmsReplicationConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ComputeConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v19.dmsReplicationConfig.DmsReplicationConfigComputeConfig,
	ReplicationConfigIdentifier: *string,
	ReplicationType: *string,
	SourceEndpointArn: *string,
	TableMappings: *string,
	TargetEndpointArn: *string,
	Id: *string,
	ReplicationSettings: *string,
	ResourceIdentifier: *string,
	StartReplication: interface{},
	SupplementalSettings: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.dmsReplicationConfig.DmsReplicationConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.computeConfig">ComputeConfig</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | compute_config block. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationConfigIdentifier">ReplicationConfigIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationType">ReplicationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.sourceEndpointArn">SourceEndpointArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tableMappings">TableMappings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.targetEndpointArn">TargetEndpointArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#id DmsReplicationConfig#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationSettings">ReplicationSettings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.startReplication">StartReplication</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#start_replication DmsReplicationConfig#start_replication}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.supplementalSettings">SupplementalSettings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#tags_all DmsReplicationConfig#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputeConfig`<sup>Required</sup> <a name="ComputeConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.computeConfig"></a>

```go
ComputeConfig DmsReplicationConfigComputeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

compute_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#compute_config DmsReplicationConfig#compute_config}

---

##### `ReplicationConfigIdentifier`<sup>Required</sup> <a name="ReplicationConfigIdentifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationConfigIdentifier"></a>

```go
ReplicationConfigIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}.

---

##### `ReplicationType`<sup>Required</sup> <a name="ReplicationType" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationType"></a>

```go
ReplicationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}.

---

##### `SourceEndpointArn`<sup>Required</sup> <a name="SourceEndpointArn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.sourceEndpointArn"></a>

```go
SourceEndpointArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}.

---

##### `TableMappings`<sup>Required</sup> <a name="TableMappings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tableMappings"></a>

```go
TableMappings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}.

---

##### `TargetEndpointArn`<sup>Required</sup> <a name="TargetEndpointArn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.targetEndpointArn"></a>

```go
TargetEndpointArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#id DmsReplicationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplicationSettings`<sup>Optional</sup> <a name="ReplicationSettings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationSettings"></a>

```go
ReplicationSettings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}.

---

##### `ResourceIdentifier`<sup>Optional</sup> <a name="ResourceIdentifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.resourceIdentifier"></a>

```go
ResourceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}.

---

##### `StartReplication`<sup>Optional</sup> <a name="StartReplication" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.startReplication"></a>

```go
StartReplication interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#start_replication DmsReplicationConfig#start_replication}.

---

##### `SupplementalSettings`<sup>Optional</sup> <a name="SupplementalSettings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.supplementalSettings"></a>

```go
SupplementalSettings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#tags_all DmsReplicationConfig#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.timeouts"></a>

```go
Timeouts DmsReplicationConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#timeouts DmsReplicationConfig#timeouts}

---

### DmsReplicationConfigTimeouts <a name="DmsReplicationConfigTimeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationconfig"

&dmsreplicationconfig.DmsReplicationConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#create DmsReplicationConfig#create}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#delete DmsReplicationConfig#delete}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#update DmsReplicationConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#create DmsReplicationConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#delete DmsReplicationConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/dms_replication_config#update DmsReplicationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationConfigComputeConfigOutputReference <a name="DmsReplicationConfigComputeConfigOutputReference" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationconfig"

dmsreplicationconfig.NewDmsReplicationConfigComputeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsReplicationConfigComputeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetDnsNameServers">ResetDnsNameServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMaxCapacityUnits">ResetMaxCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMinCapacityUnits">ResetMinCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetDnsNameServers` <a name="ResetDnsNameServers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetDnsNameServers"></a>

```go
func ResetDnsNameServers()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetMaxCapacityUnits` <a name="ResetMaxCapacityUnits" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMaxCapacityUnits"></a>

```go
func ResetMaxCapacityUnits()
```

##### `ResetMinCapacityUnits` <a name="ResetMinCapacityUnits" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMinCapacityUnits"></a>

```go
func ResetMinCapacityUnits()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMultiAz"></a>

```go
func ResetMultiAz()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServersInput">DnsNameServersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnitsInput">MaxCapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnitsInput">MinCapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAzInput">MultiAzInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupIdInput">ReplicationSubnetGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServers">DnsNameServers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnits">MaxCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnits">MinCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAz">MultiAz</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupId">ReplicationSubnetGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `DnsNameServersInput`<sup>Optional</sup> <a name="DnsNameServersInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServersInput"></a>

```go
func DnsNameServersInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MaxCapacityUnitsInput`<sup>Optional</sup> <a name="MaxCapacityUnitsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnitsInput"></a>

```go
func MaxCapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `MinCapacityUnitsInput`<sup>Optional</sup> <a name="MinCapacityUnitsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnitsInput"></a>

```go
func MinCapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAzInput"></a>

```go
func MultiAzInput() interface{}
```

- *Type:* interface{}

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `ReplicationSubnetGroupIdInput`<sup>Optional</sup> <a name="ReplicationSubnetGroupIdInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupIdInput"></a>

```go
func ReplicationSubnetGroupIdInput() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `DnsNameServers`<sup>Required</sup> <a name="DnsNameServers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServers"></a>

```go
func DnsNameServers() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MaxCapacityUnits`<sup>Required</sup> <a name="MaxCapacityUnits" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnits"></a>

```go
func MaxCapacityUnits() *f64
```

- *Type:* *f64

---

##### `MinCapacityUnits`<sup>Required</sup> <a name="MinCapacityUnits" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnits"></a>

```go
func MinCapacityUnits() *f64
```

- *Type:* *f64

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAz"></a>

```go
func MultiAz() interface{}
```

- *Type:* interface{}

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `ReplicationSubnetGroupId`<sup>Required</sup> <a name="ReplicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupId"></a>

```go
func ReplicationSubnetGroupId() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DmsReplicationConfigComputeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---


### DmsReplicationConfigTimeoutsOutputReference <a name="DmsReplicationConfigTimeoutsOutputReference" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/dmsreplicationconfig"

dmsreplicationconfig.NewDmsReplicationConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsReplicationConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



