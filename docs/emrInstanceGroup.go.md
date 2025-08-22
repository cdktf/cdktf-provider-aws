# `emrInstanceGroup` Submodule <a name="`emrInstanceGroup` Submodule" id="@cdktf/provider-aws.emrInstanceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrInstanceGroup <a name="EmrInstanceGroup" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group aws_emr_instance_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/emrinstancegroup"

emrinstancegroup.NewEmrInstanceGroup(scope Construct, id *string, config EmrInstanceGroupConfig) EmrInstanceGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig">EmrInstanceGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig">EmrInstanceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.putEbsConfig">PutEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetAutoscalingPolicy">ResetAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetBidPrice">ResetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetConfigurationsJson">ResetConfigurationsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetEbsConfig">ResetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEbsConfig` <a name="PutEbsConfig" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.putEbsConfig"></a>

```go
func PutEbsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.putEbsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoscalingPolicy` <a name="ResetAutoscalingPolicy" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetAutoscalingPolicy"></a>

```go
func ResetAutoscalingPolicy()
```

##### `ResetBidPrice` <a name="ResetBidPrice" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetBidPrice"></a>

```go
func ResetBidPrice()
```

##### `ResetConfigurationsJson` <a name="ResetConfigurationsJson" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetConfigurationsJson"></a>

```go
func ResetConfigurationsJson()
```

##### `ResetEbsConfig` <a name="ResetEbsConfig" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetEbsConfig"></a>

```go
func ResetEbsConfig()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetEbsOptimized"></a>

```go
func ResetEbsOptimized()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmrInstanceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/emrinstancegroup"

emrinstancegroup.EmrInstanceGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/emrinstancegroup"

emrinstancegroup.EmrInstanceGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/emrinstancegroup"

emrinstancegroup.EmrInstanceGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/emrinstancegroup"

emrinstancegroup.EmrInstanceGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EmrInstanceGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EmrInstanceGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EmrInstanceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EmrInstanceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsConfig">EbsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList">EmrInstanceGroupEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.runningInstanceCount">RunningInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.autoscalingPolicyInput">AutoscalingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.bidPriceInput">BidPriceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.configurationsJsonInput">ConfigurationsJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsConfigInput">EbsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.bidPrice">BidPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.configurationsJson">ConfigurationsJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EbsConfig`<sup>Required</sup> <a name="EbsConfig" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsConfig"></a>

```go
func EbsConfig() EmrInstanceGroupEbsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList">EmrInstanceGroupEbsConfigList</a>

---

##### `RunningInstanceCount`<sup>Required</sup> <a name="RunningInstanceCount" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.runningInstanceCount"></a>

```go
func RunningInstanceCount() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AutoscalingPolicyInput`<sup>Optional</sup> <a name="AutoscalingPolicyInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.autoscalingPolicyInput"></a>

```go
func AutoscalingPolicyInput() *string
```

- *Type:* *string

---

##### `BidPriceInput`<sup>Optional</sup> <a name="BidPriceInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.bidPriceInput"></a>

```go
func BidPriceInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationsJsonInput`<sup>Optional</sup> <a name="ConfigurationsJsonInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.configurationsJsonInput"></a>

```go
func ConfigurationsJsonInput() *string
```

- *Type:* *string

---

##### `EbsConfigInput`<sup>Optional</sup> <a name="EbsConfigInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsConfigInput"></a>

```go
func EbsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsOptimizedInput"></a>

```go
func EbsOptimizedInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.autoscalingPolicy"></a>

```go
func AutoscalingPolicy() *string
```

- *Type:* *string

---

##### `BidPrice`<sup>Required</sup> <a name="BidPrice" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.bidPrice"></a>

```go
func BidPrice() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ConfigurationsJson`<sup>Required</sup> <a name="ConfigurationsJson" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.configurationsJson"></a>

```go
func ConfigurationsJson() *string
```

- *Type:* *string

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.ebsOptimized"></a>

```go
func EbsOptimized() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrInstanceGroupConfig <a name="EmrInstanceGroupConfig" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/emrinstancegroup"

&emrinstancegroup.EmrInstanceGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	InstanceType: *string,
	AutoscalingPolicy: *string,
	BidPrice: *string,
	ConfigurationsJson: *string,
	EbsConfig: interface{},
	EbsOptimized: interface{},
	Id: *string,
	InstanceCount: *f64,
	Name: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#cluster_id EmrInstanceGroup#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#instance_type EmrInstanceGroup#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#autoscaling_policy EmrInstanceGroup#autoscaling_policy}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.bidPrice">BidPrice</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#bid_price EmrInstanceGroup#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.configurationsJson">ConfigurationsJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#configurations_json EmrInstanceGroup#configurations_json}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.ebsConfig">EbsConfig</a></code> | <code>interface{}</code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#ebs_optimized EmrInstanceGroup#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#id EmrInstanceGroup#id}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#instance_count EmrInstanceGroup#instance_count}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#name EmrInstanceGroup#name}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#cluster_id EmrInstanceGroup#cluster_id}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#instance_type EmrInstanceGroup#instance_type}.

---

##### `AutoscalingPolicy`<sup>Optional</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.autoscalingPolicy"></a>

```go
AutoscalingPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#autoscaling_policy EmrInstanceGroup#autoscaling_policy}.

---

##### `BidPrice`<sup>Optional</sup> <a name="BidPrice" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.bidPrice"></a>

```go
BidPrice *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#bid_price EmrInstanceGroup#bid_price}.

---

##### `ConfigurationsJson`<sup>Optional</sup> <a name="ConfigurationsJson" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.configurationsJson"></a>

```go
ConfigurationsJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#configurations_json EmrInstanceGroup#configurations_json}.

---

##### `EbsConfig`<sup>Optional</sup> <a name="EbsConfig" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.ebsConfig"></a>

```go
EbsConfig interface{}
```

- *Type:* interface{}

ebs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#ebs_config EmrInstanceGroup#ebs_config}

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.ebsOptimized"></a>

```go
EbsOptimized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#ebs_optimized EmrInstanceGroup#ebs_optimized}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#id EmrInstanceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#instance_count EmrInstanceGroup#instance_count}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#name EmrInstanceGroup#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#region EmrInstanceGroup#region}

---

### EmrInstanceGroupEbsConfig <a name="EmrInstanceGroupEbsConfig" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/emrinstancegroup"

&emrinstancegroup.EmrInstanceGroupEbsConfig {
	Size: *f64,
	Type: *string,
	Iops: *f64,
	VolumesPerInstance: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#size EmrInstanceGroup#size}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#type EmrInstanceGroup#type}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#iops EmrInstanceGroup#iops}. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#volumes_per_instance EmrInstanceGroup#volumes_per_instance}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#size EmrInstanceGroup#size}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#type EmrInstanceGroup#type}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#iops EmrInstanceGroup#iops}.

---

##### `VolumesPerInstance`<sup>Optional</sup> <a name="VolumesPerInstance" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfig.property.volumesPerInstance"></a>

```go
VolumesPerInstance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/emr_instance_group#volumes_per_instance EmrInstanceGroup#volumes_per_instance}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrInstanceGroupEbsConfigList <a name="EmrInstanceGroupEbsConfigList" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/emrinstancegroup"

emrinstancegroup.NewEmrInstanceGroupEbsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrInstanceGroupEbsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.get"></a>

```go
func Get(index *f64) EmrInstanceGroupEbsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrInstanceGroupEbsConfigOutputReference <a name="EmrInstanceGroupEbsConfigOutputReference" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/emrinstancegroup"

emrinstancegroup.NewEmrInstanceGroupEbsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrInstanceGroupEbsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance">ResetVolumesPerInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetVolumesPerInstance` <a name="ResetVolumesPerInstance" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance"></a>

```go
func ResetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput">VolumesPerInstanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.volumesPerInstance">VolumesPerInstance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VolumesPerInstanceInput`<sup>Optional</sup> <a name="VolumesPerInstanceInput" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```go
func VolumesPerInstanceInput() *f64
```

- *Type:* *f64

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VolumesPerInstance`<sup>Required</sup> <a name="VolumesPerInstance" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.volumesPerInstance"></a>

```go
func VolumesPerInstance() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrInstanceGroup.EmrInstanceGroupEbsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



