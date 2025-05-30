# `worklinkFleet` Submodule <a name="`worklinkFleet` Submodule" id="@cdktf/provider-aws.worklinkFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorklinkFleet <a name="WorklinkFleet" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet aws_worklink_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkfleet"

worklinkfleet.NewWorklinkFleet(scope Construct, id *string, config WorklinkFleetConfig) WorklinkFleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig">WorklinkFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig">WorklinkFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider">PutIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetAuditStreamArn">ResetAuditStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDeviceCaCertificate">ResetDeviceCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetIdentityProvider">ResetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOptimizeForEndUserLocation">ResetOptimizeForEndUserLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentityProvider` <a name="PutIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider"></a>

```go
func PutIdentityProvider(value WorklinkFleetIdentityProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork"></a>

```go
func PutNetwork(value WorklinkFleetNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---

##### `ResetAuditStreamArn` <a name="ResetAuditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetAuditStreamArn"></a>

```go
func ResetAuditStreamArn()
```

##### `ResetDeviceCaCertificate` <a name="ResetDeviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDeviceCaCertificate"></a>

```go
func ResetDeviceCaCertificate()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityProvider` <a name="ResetIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetIdentityProvider"></a>

```go
func ResetIdentityProvider()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetOptimizeForEndUserLocation` <a name="ResetOptimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOptimizeForEndUserLocation"></a>

```go
func ResetOptimizeForEndUserLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorklinkFleet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkfleet"

worklinkfleet.WorklinkFleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkfleet"

worklinkfleet.WorklinkFleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkfleet"

worklinkfleet.WorklinkFleet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkfleet"

worklinkfleet.WorklinkFleet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WorklinkFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorklinkFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorklinkFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WorklinkFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.companyCode">CompanyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProvider">IdentityProvider</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference">WorklinkFleetIdentityProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.network">Network</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference">WorklinkFleetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArnInput">AuditStreamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificateInput">DeviceCaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProviderInput">IdentityProviderInput</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocationInput">OptimizeForEndUserLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArn">AuditStreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificate">DeviceCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocation">OptimizeForEndUserLocation</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CompanyCode`<sup>Required</sup> <a name="CompanyCode" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.companyCode"></a>

```go
func CompanyCode() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProvider"></a>

```go
func IdentityProvider() WorklinkFleetIdentityProviderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference">WorklinkFleetIdentityProviderOutputReference</a>

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.network"></a>

```go
func Network() WorklinkFleetNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference">WorklinkFleetNetworkOutputReference</a>

---

##### `AuditStreamArnInput`<sup>Optional</sup> <a name="AuditStreamArnInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArnInput"></a>

```go
func AuditStreamArnInput() *string
```

- *Type:* *string

---

##### `DeviceCaCertificateInput`<sup>Optional</sup> <a name="DeviceCaCertificateInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificateInput"></a>

```go
func DeviceCaCertificateInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdentityProviderInput`<sup>Optional</sup> <a name="IdentityProviderInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProviderInput"></a>

```go
func IdentityProviderInput() WorklinkFleetIdentityProvider
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.networkInput"></a>

```go
func NetworkInput() WorklinkFleetNetwork
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---

##### `OptimizeForEndUserLocationInput`<sup>Optional</sup> <a name="OptimizeForEndUserLocationInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocationInput"></a>

```go
func OptimizeForEndUserLocationInput() interface{}
```

- *Type:* interface{}

---

##### `AuditStreamArn`<sup>Required</sup> <a name="AuditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArn"></a>

```go
func AuditStreamArn() *string
```

- *Type:* *string

---

##### `DeviceCaCertificate`<sup>Required</sup> <a name="DeviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificate"></a>

```go
func DeviceCaCertificate() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OptimizeForEndUserLocation`<sup>Required</sup> <a name="OptimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocation"></a>

```go
func OptimizeForEndUserLocation() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorklinkFleetConfig <a name="WorklinkFleetConfig" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkfleet"

&worklinkfleet.WorklinkFleetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AuditStreamArn: *string,
	DeviceCaCertificate: *string,
	DisplayName: *string,
	Id: *string,
	IdentityProvider: github.com/cdktf/cdktf-provider-aws-go/aws/v19.worklinkFleet.WorklinkFleetIdentityProvider,
	Network: github.com/cdktf/cdktf-provider-aws-go/aws/v19.worklinkFleet.WorklinkFleetNetwork,
	OptimizeForEndUserLocation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#name WorklinkFleet#name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.auditStreamArn">AuditStreamArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.deviceCaCertificate">DeviceCaCertificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#display_name WorklinkFleet#display_name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#id WorklinkFleet#id}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.identityProvider">IdentityProvider</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | identity_provider block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.optimizeForEndUserLocation">OptimizeForEndUserLocation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#name WorklinkFleet#name}.

---

##### `AuditStreamArn`<sup>Optional</sup> <a name="AuditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.auditStreamArn"></a>

```go
AuditStreamArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}.

---

##### `DeviceCaCertificate`<sup>Optional</sup> <a name="DeviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.deviceCaCertificate"></a>

```go
DeviceCaCertificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#display_name WorklinkFleet#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#id WorklinkFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProvider`<sup>Optional</sup> <a name="IdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.identityProvider"></a>

```go
IdentityProvider WorklinkFleetIdentityProvider
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#identity_provider WorklinkFleet#identity_provider}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.network"></a>

```go
Network WorklinkFleetNetwork
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#network WorklinkFleet#network}

---

##### `OptimizeForEndUserLocation`<sup>Optional</sup> <a name="OptimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.optimizeForEndUserLocation"></a>

```go
OptimizeForEndUserLocation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}.

---

### WorklinkFleetIdentityProvider <a name="WorklinkFleetIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkfleet"

&worklinkfleet.WorklinkFleetIdentityProvider {
	SamlMetadata: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.samlMetadata">SamlMetadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#type WorklinkFleet#type}. |

---

##### `SamlMetadata`<sup>Required</sup> <a name="SamlMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.samlMetadata"></a>

```go
SamlMetadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#type WorklinkFleet#type}.

---

### WorklinkFleetNetwork <a name="WorklinkFleetNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkfleet"

&worklinkfleet.WorklinkFleetNetwork {
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#vpc_id WorklinkFleet#vpc_id}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/worklink_fleet#vpc_id WorklinkFleet#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorklinkFleetIdentityProviderOutputReference <a name="WorklinkFleetIdentityProviderOutputReference" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkfleet"

worklinkfleet.NewWorklinkFleetIdentityProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorklinkFleetIdentityProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadataInput">SamlMetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadata">SamlMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SamlMetadataInput`<sup>Optional</sup> <a name="SamlMetadataInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadataInput"></a>

```go
func SamlMetadataInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `SamlMetadata`<sup>Required</sup> <a name="SamlMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadata"></a>

```go
func SamlMetadata() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() WorklinkFleetIdentityProvider
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---


### WorklinkFleetNetworkOutputReference <a name="WorklinkFleetNetworkOutputReference" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/worklinkfleet"

worklinkfleet.NewWorklinkFleetNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorklinkFleetNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() WorklinkFleetNetwork
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---



