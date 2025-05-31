# `internetmonitorMonitor` Submodule <a name="`internetmonitorMonitor` Submodule" id="@cdktf/provider-aws.internetmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InternetmonitorMonitor <a name="InternetmonitorMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor aws_internetmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/internetmonitormonitor"

internetmonitormonitor.NewInternetmonitorMonitor(scope Construct, id *string, config InternetmonitorMonitorConfig) InternetmonitorMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig">InternetmonitorMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig">InternetmonitorMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig">PutHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery">PutInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetHealthEventsConfig">ResetHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetInternetMeasurementsLogDelivery">ResetInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetMaxCityNetworksToMonitor">ResetMaxCityNetworksToMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTrafficPercentageToMonitor">ResetTrafficPercentageToMonitor</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthEventsConfig` <a name="PutHealthEventsConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig"></a>

```go
func PutHealthEventsConfig(value InternetmonitorMonitorHealthEventsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---

##### `PutInternetMeasurementsLogDelivery` <a name="PutInternetMeasurementsLogDelivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery"></a>

```go
func PutInternetMeasurementsLogDelivery(value InternetmonitorMonitorInternetMeasurementsLogDelivery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---

##### `ResetHealthEventsConfig` <a name="ResetHealthEventsConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetHealthEventsConfig"></a>

```go
func ResetHealthEventsConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetId"></a>

```go
func ResetId()
```

##### `ResetInternetMeasurementsLogDelivery` <a name="ResetInternetMeasurementsLogDelivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetInternetMeasurementsLogDelivery"></a>

```go
func ResetInternetMeasurementsLogDelivery()
```

##### `ResetMaxCityNetworksToMonitor` <a name="ResetMaxCityNetworksToMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetMaxCityNetworksToMonitor"></a>

```go
func ResetMaxCityNetworksToMonitor()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetResources"></a>

```go
func ResetResources()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTrafficPercentageToMonitor` <a name="ResetTrafficPercentageToMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTrafficPercentageToMonitor"></a>

```go
func ResetTrafficPercentageToMonitor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InternetmonitorMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/internetmonitormonitor"

internetmonitormonitor.InternetmonitorMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/internetmonitormonitor"

internetmonitormonitor.InternetmonitorMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/internetmonitormonitor"

internetmonitormonitor.InternetmonitorMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/internetmonitormonitor"

internetmonitormonitor.InternetmonitorMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a InternetmonitorMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the InternetmonitorMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing InternetmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the InternetmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfig">HealthEventsConfig</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDelivery">InternetMeasurementsLogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfigInput">HealthEventsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDeliveryInput">InternetMeasurementsLogDeliveryInput</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitorInput">MaxCityNetworksToMonitorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.monitorNameInput">MonitorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitorInput">TrafficPercentageToMonitorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitor">MaxCityNetworksToMonitor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.monitorName">MonitorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitor">TrafficPercentageToMonitor</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HealthEventsConfig`<sup>Required</sup> <a name="HealthEventsConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfig"></a>

```go
func HealthEventsConfig() InternetmonitorMonitorHealthEventsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigOutputReference</a>

---

##### `InternetMeasurementsLogDelivery`<sup>Required</sup> <a name="InternetMeasurementsLogDelivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDelivery"></a>

```go
func InternetMeasurementsLogDelivery() InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a>

---

##### `HealthEventsConfigInput`<sup>Optional</sup> <a name="HealthEventsConfigInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfigInput"></a>

```go
func HealthEventsConfigInput() InternetmonitorMonitorHealthEventsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InternetMeasurementsLogDeliveryInput`<sup>Optional</sup> <a name="InternetMeasurementsLogDeliveryInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDeliveryInput"></a>

```go
func InternetMeasurementsLogDeliveryInput() InternetmonitorMonitorInternetMeasurementsLogDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---

##### `MaxCityNetworksToMonitorInput`<sup>Optional</sup> <a name="MaxCityNetworksToMonitorInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitorInput"></a>

```go
func MaxCityNetworksToMonitorInput() *f64
```

- *Type:* *f64

---

##### `MonitorNameInput`<sup>Optional</sup> <a name="MonitorNameInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.monitorNameInput"></a>

```go
func MonitorNameInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TrafficPercentageToMonitorInput`<sup>Optional</sup> <a name="TrafficPercentageToMonitorInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitorInput"></a>

```go
func TrafficPercentageToMonitorInput() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxCityNetworksToMonitor`<sup>Required</sup> <a name="MaxCityNetworksToMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitor"></a>

```go
func MaxCityNetworksToMonitor() *f64
```

- *Type:* *f64

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.monitorName"></a>

```go
func MonitorName() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TrafficPercentageToMonitor`<sup>Required</sup> <a name="TrafficPercentageToMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitor"></a>

```go
func TrafficPercentageToMonitor() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### InternetmonitorMonitorConfig <a name="InternetmonitorMonitorConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/internetmonitormonitor"

&internetmonitormonitor.InternetmonitorMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MonitorName: *string,
	HealthEventsConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v19.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig,
	Id: *string,
	InternetMeasurementsLogDelivery: github.com/cdktf/cdktf-provider-aws-go/aws/v19.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery,
	MaxCityNetworksToMonitor: *f64,
	Resources: *[]*string,
	Status: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TrafficPercentageToMonitor: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.monitorName">MonitorName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.healthEventsConfig">HealthEventsConfig</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | health_events_config block. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#id InternetmonitorMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.internetMeasurementsLogDelivery">InternetMeasurementsLogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | internet_measurements_log_delivery block. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.maxCityNetworksToMonitor">MaxCityNetworksToMonitor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resources">Resources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#tags_all InternetmonitorMonitor#tags_all}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.trafficPercentageToMonitor">TrafficPercentageToMonitor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.monitorName"></a>

```go
MonitorName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}.

---

##### `HealthEventsConfig`<sup>Optional</sup> <a name="HealthEventsConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.healthEventsConfig"></a>

```go
HealthEventsConfig InternetmonitorMonitorHealthEventsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

health_events_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#id InternetmonitorMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternetMeasurementsLogDelivery`<sup>Optional</sup> <a name="InternetMeasurementsLogDelivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.internetMeasurementsLogDelivery"></a>

```go
InternetMeasurementsLogDelivery InternetmonitorMonitorInternetMeasurementsLogDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

internet_measurements_log_delivery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}

---

##### `MaxCityNetworksToMonitor`<sup>Optional</sup> <a name="MaxCityNetworksToMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.maxCityNetworksToMonitor"></a>

```go
MaxCityNetworksToMonitor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#tags_all InternetmonitorMonitor#tags_all}.

---

##### `TrafficPercentageToMonitor`<sup>Optional</sup> <a name="TrafficPercentageToMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.trafficPercentageToMonitor"></a>

```go
TrafficPercentageToMonitor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}.

---

### InternetmonitorMonitorHealthEventsConfig <a name="InternetmonitorMonitorHealthEventsConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/internetmonitormonitor"

&internetmonitormonitor.InternetmonitorMonitorHealthEventsConfig {
	AvailabilityScoreThreshold: *f64,
	PerformanceScoreThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityScoreThreshold">AvailabilityScoreThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceScoreThreshold">PerformanceScoreThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}. |

---

##### `AvailabilityScoreThreshold`<sup>Optional</sup> <a name="AvailabilityScoreThreshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityScoreThreshold"></a>

```go
AvailabilityScoreThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}.

---

##### `PerformanceScoreThreshold`<sup>Optional</sup> <a name="PerformanceScoreThreshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceScoreThreshold"></a>

```go
PerformanceScoreThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}.

---

### InternetmonitorMonitorInternetMeasurementsLogDelivery <a name="InternetmonitorMonitorInternetMeasurementsLogDelivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/internetmonitormonitor"

&internetmonitormonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery {
	S3Config: github.com/cdktf/cdktf-provider-aws-go/aws/v19.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.property.s3Config">S3Config</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | s3_config block. |

---

##### `S3Config`<sup>Optional</sup> <a name="S3Config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.property.s3Config"></a>

```go
S3Config InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

s3_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}

---

### InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/internetmonitormonitor"

&internetmonitormonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config {
	BucketName: *string,
	BucketPrefix: *string,
	LogDeliveryStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.logDeliveryStatus">LogDeliveryStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketPrefix"></a>

```go
BucketPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}.

---

##### `LogDeliveryStatus`<sup>Optional</sup> <a name="LogDeliveryStatus" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.logDeliveryStatus"></a>

```go
LogDeliveryStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### InternetmonitorMonitorHealthEventsConfigOutputReference <a name="InternetmonitorMonitorHealthEventsConfigOutputReference" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/internetmonitormonitor"

internetmonitormonitor.NewInternetmonitorMonitorHealthEventsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InternetmonitorMonitorHealthEventsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityScoreThreshold">ResetAvailabilityScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceScoreThreshold">ResetPerformanceScoreThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityScoreThreshold` <a name="ResetAvailabilityScoreThreshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityScoreThreshold"></a>

```go
func ResetAvailabilityScoreThreshold()
```

##### `ResetPerformanceScoreThreshold` <a name="ResetPerformanceScoreThreshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceScoreThreshold"></a>

```go
func ResetPerformanceScoreThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThresholdInput">AvailabilityScoreThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThresholdInput">PerformanceScoreThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold">AvailabilityScoreThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold">PerformanceScoreThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityScoreThresholdInput`<sup>Optional</sup> <a name="AvailabilityScoreThresholdInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThresholdInput"></a>

```go
func AvailabilityScoreThresholdInput() *f64
```

- *Type:* *f64

---

##### `PerformanceScoreThresholdInput`<sup>Optional</sup> <a name="PerformanceScoreThresholdInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThresholdInput"></a>

```go
func PerformanceScoreThresholdInput() *f64
```

- *Type:* *f64

---

##### `AvailabilityScoreThreshold`<sup>Required</sup> <a name="AvailabilityScoreThreshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold"></a>

```go
func AvailabilityScoreThreshold() *f64
```

- *Type:* *f64

---

##### `PerformanceScoreThreshold`<sup>Required</sup> <a name="PerformanceScoreThreshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold"></a>

```go
func PerformanceScoreThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() InternetmonitorMonitorHealthEventsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---


### InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/internetmonitormonitor"

internetmonitormonitor.NewInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config">PutS3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resetS3Config">ResetS3Config</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Config` <a name="PutS3Config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config"></a>

```go
func PutS3Config(value InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---

##### `ResetS3Config` <a name="ResetS3Config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resetS3Config"></a>

```go
func ResetS3Config()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config">S3Config</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3ConfigInput">S3ConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Config`<sup>Required</sup> <a name="S3Config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config"></a>

```go
func S3Config() InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a>

---

##### `S3ConfigInput`<sup>Optional</sup> <a name="S3ConfigInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3ConfigInput"></a>

```go
func S3ConfigInput() InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue"></a>

```go
func InternalValue() InternetmonitorMonitorInternetMeasurementsLogDelivery
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---


### InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/internetmonitormonitor"

internetmonitormonitor.NewInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetLogDeliveryStatus">ResetLogDeliveryStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketPrefix"></a>

```go
func ResetBucketPrefix()
```

##### `ResetLogDeliveryStatus` <a name="ResetLogDeliveryStatus" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetLogDeliveryStatus"></a>

```go
func ResetLogDeliveryStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatusInput">LogDeliveryStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus">LogDeliveryStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefixInput"></a>

```go
func BucketPrefixInput() *string
```

- *Type:* *string

---

##### `LogDeliveryStatusInput`<sup>Optional</sup> <a name="LogDeliveryStatusInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatusInput"></a>

```go
func LogDeliveryStatusInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix"></a>

```go
func BucketPrefix() *string
```

- *Type:* *string

---

##### `LogDeliveryStatus`<sup>Required</sup> <a name="LogDeliveryStatus" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus"></a>

```go
func LogDeliveryStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---



