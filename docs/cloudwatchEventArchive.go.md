# `cloudwatchEventArchive` Submodule <a name="`cloudwatchEventArchive` Submodule" id="@cdktf/provider-aws.cloudwatchEventArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventArchive <a name="CloudwatchEventArchive" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive aws_cloudwatch_event_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudwatcheventarchive"

cloudwatcheventarchive.NewCloudwatchEventArchive(scope Construct, id *string, config CloudwatchEventArchiveConfig) CloudwatchEventArchive
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig">CloudwatchEventArchiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig">CloudwatchEventArchiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetEventPattern">ResetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetKmsKeyIdentifier">ResetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEventPattern` <a name="ResetEventPattern" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetEventPattern"></a>

```go
func ResetEventPattern()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyIdentifier` <a name="ResetKmsKeyIdentifier" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetKmsKeyIdentifier"></a>

```go
func ResetKmsKeyIdentifier()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchEventArchive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudwatcheventarchive"

cloudwatcheventarchive.CloudwatchEventArchive_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudwatcheventarchive"

cloudwatcheventarchive.CloudwatchEventArchive_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudwatcheventarchive"

cloudwatcheventarchive.CloudwatchEventArchive_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudwatcheventarchive"

cloudwatcheventarchive.CloudwatchEventArchive_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudwatchEventArchive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchEventArchive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchEventArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchEventArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventPatternInput">EventPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventSourceArnInput">EventSourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.kmsKeyIdentifierInput">KmsKeyIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventPattern">EventPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventSourceArn">EventSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventPatternInput`<sup>Optional</sup> <a name="EventPatternInput" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventPatternInput"></a>

```go
func EventPatternInput() *string
```

- *Type:* *string

---

##### `EventSourceArnInput`<sup>Optional</sup> <a name="EventSourceArnInput" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventSourceArnInput"></a>

```go
func EventSourceArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdentifierInput`<sup>Optional</sup> <a name="KmsKeyIdentifierInput" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.kmsKeyIdentifierInput"></a>

```go
func KmsKeyIdentifierInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventPattern"></a>

```go
func EventPattern() *string
```

- *Type:* *string

---

##### `EventSourceArn`<sup>Required</sup> <a name="EventSourceArn" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.eventSourceArn"></a>

```go
func EventSourceArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.kmsKeyIdentifier"></a>

```go
func KmsKeyIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchive.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventArchiveConfig <a name="CloudwatchEventArchiveConfig" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cloudwatcheventarchive"

&cloudwatcheventarchive.CloudwatchEventArchiveConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EventSourceArn: *string,
	Name: *string,
	Description: *string,
	EventPattern: *string,
	Id: *string,
	KmsKeyIdentifier: *string,
	Region: *string,
	RetentionDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.eventSourceArn">EventSourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#event_source_arn CloudwatchEventArchive#event_source_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#name CloudwatchEventArchive#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#description CloudwatchEventArchive#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.eventPattern">EventPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#event_pattern CloudwatchEventArchive#event_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#id CloudwatchEventArchive#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#kms_key_identifier CloudwatchEventArchive#kms_key_identifier}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#retention_days CloudwatchEventArchive#retention_days}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventSourceArn`<sup>Required</sup> <a name="EventSourceArn" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.eventSourceArn"></a>

```go
EventSourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#event_source_arn CloudwatchEventArchive#event_source_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#name CloudwatchEventArchive#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#description CloudwatchEventArchive#description}.

---

##### `EventPattern`<sup>Optional</sup> <a name="EventPattern" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.eventPattern"></a>

```go
EventPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#event_pattern CloudwatchEventArchive#event_pattern}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#id CloudwatchEventArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyIdentifier`<sup>Optional</sup> <a name="KmsKeyIdentifier" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.kmsKeyIdentifier"></a>

```go
KmsKeyIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#kms_key_identifier CloudwatchEventArchive#kms_key_identifier}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#region CloudwatchEventArchive#region}

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-aws.cloudwatchEventArchive.CloudwatchEventArchiveConfig.property.retentionDays"></a>

```go
RetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cloudwatch_event_archive#retention_days CloudwatchEventArchive#retention_days}.

---



