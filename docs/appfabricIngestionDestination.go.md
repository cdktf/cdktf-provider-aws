# `appfabricIngestionDestination` Submodule <a name="`appfabricIngestionDestination` Submodule" id="@cdktf/provider-aws.appfabricIngestionDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricIngestionDestination <a name="AppfabricIngestionDestination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination aws_appfabric_ingestion_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestination(scope Construct, id *string, config AppfabricIngestionDestinationConfig) AppfabricIngestionDestination
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig">AppfabricIngestionDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig">AppfabricIngestionDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration">PutDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration">PutProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetDestinationConfiguration">ResetDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetProcessingConfiguration">ResetProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationConfiguration` <a name="PutDestinationConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration"></a>

```go
func PutDestinationConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProcessingConfiguration` <a name="PutProcessingConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration"></a>

```go
func PutProcessingConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putTimeouts"></a>

```go
func PutTimeouts(value AppfabricIngestionDestinationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>

---

##### `ResetDestinationConfiguration` <a name="ResetDestinationConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetDestinationConfiguration"></a>

```go
func ResetDestinationConfiguration()
```

##### `ResetProcessingConfiguration` <a name="ResetProcessingConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetProcessingConfiguration"></a>

```go
func ResetProcessingConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppfabricIngestionDestination resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.AppfabricIngestionDestination_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.AppfabricIngestionDestination_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.AppfabricIngestionDestination_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.AppfabricIngestionDestination_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppfabricIngestionDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppfabricIngestionDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppfabricIngestionDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppfabricIngestionDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList">AppfabricIngestionDestinationDestinationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfiguration">ProcessingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList">AppfabricIngestionDestinationProcessingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference">AppfabricIngestionDestinationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArnInput">AppBundleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfigurationInput">DestinationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArnInput">IngestionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfigurationInput">ProcessingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArn">AppBundleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArn">IngestionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DestinationConfiguration`<sup>Required</sup> <a name="DestinationConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfiguration"></a>

```go
func DestinationConfiguration() AppfabricIngestionDestinationDestinationConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList">AppfabricIngestionDestinationDestinationConfigurationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProcessingConfiguration`<sup>Required</sup> <a name="ProcessingConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfiguration"></a>

```go
func ProcessingConfiguration() AppfabricIngestionDestinationProcessingConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList">AppfabricIngestionDestinationProcessingConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.timeouts"></a>

```go
func Timeouts() AppfabricIngestionDestinationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference">AppfabricIngestionDestinationTimeoutsOutputReference</a>

---

##### `AppBundleArnInput`<sup>Optional</sup> <a name="AppBundleArnInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArnInput"></a>

```go
func AppBundleArnInput() *string
```

- *Type:* *string

---

##### `DestinationConfigurationInput`<sup>Optional</sup> <a name="DestinationConfigurationInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfigurationInput"></a>

```go
func DestinationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IngestionArnInput`<sup>Optional</sup> <a name="IngestionArnInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArnInput"></a>

```go
func IngestionArnInput() *string
```

- *Type:* *string

---

##### `ProcessingConfigurationInput`<sup>Optional</sup> <a name="ProcessingConfigurationInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfigurationInput"></a>

```go
func ProcessingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AppBundleArn`<sup>Required</sup> <a name="AppBundleArn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArn"></a>

```go
func AppBundleArn() *string
```

- *Type:* *string

---

##### `IngestionArn`<sup>Required</sup> <a name="IngestionArn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArn"></a>

```go
func IngestionArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricIngestionDestinationConfig <a name="AppfabricIngestionDestinationConfig" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

&appfabricingestiondestination.AppfabricIngestionDestinationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppBundleArn: *string,
	IngestionArn: *string,
	DestinationConfiguration: interface{},
	ProcessingConfiguration: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.appBundleArn">AppBundleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.ingestionArn">IngestionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.destinationConfiguration">DestinationConfiguration</a></code> | <code>interface{}</code> | destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.processingConfiguration">ProcessingConfiguration</a></code> | <code>interface{}</code> | processing_configuration block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppBundleArn`<sup>Required</sup> <a name="AppBundleArn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.appBundleArn"></a>

```go
AppBundleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}.

---

##### `IngestionArn`<sup>Required</sup> <a name="IngestionArn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.ingestionArn"></a>

```go
IngestionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}.

---

##### `DestinationConfiguration`<sup>Optional</sup> <a name="DestinationConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.destinationConfiguration"></a>

```go
DestinationConfiguration interface{}
```

- *Type:* interface{}

destination_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#destination_configuration AppfabricIngestionDestination#destination_configuration}

---

##### `ProcessingConfiguration`<sup>Optional</sup> <a name="ProcessingConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.processingConfiguration"></a>

```go
ProcessingConfiguration interface{}
```

- *Type:* interface{}

processing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#processing_configuration AppfabricIngestionDestination#processing_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.timeouts"></a>

```go
Timeouts AppfabricIngestionDestinationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#timeouts AppfabricIngestionDestination#timeouts}

---

### AppfabricIngestionDestinationDestinationConfiguration <a name="AppfabricIngestionDestinationDestinationConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

&appfabricingestiondestination.AppfabricIngestionDestinationDestinationConfiguration {
	AuditLog: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.property.auditLog">AuditLog</a></code> | <code>interface{}</code> | audit_log block. |

---

##### `AuditLog`<sup>Optional</sup> <a name="AuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.property.auditLog"></a>

```go
AuditLog interface{}
```

- *Type:* interface{}

audit_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLog <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

&appfabricingestiondestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog {
	Destination: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.property.destination">Destination</a></code> | <code>interface{}</code> | destination block. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.property.destination"></a>

```go
Destination interface{}
```

- *Type:* interface{}

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#destination AppfabricIngestionDestination#destination}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

&appfabricingestiondestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination {
	FirehoseStream: interface{},
	S3Bucket: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.firehoseStream">FirehoseStream</a></code> | <code>interface{}</code> | firehose_stream block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.s3Bucket">S3Bucket</a></code> | <code>interface{}</code> | s3_bucket block. |

---

##### `FirehoseStream`<sup>Optional</sup> <a name="FirehoseStream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.firehoseStream"></a>

```go
FirehoseStream interface{}
```

- *Type:* interface{}

firehose_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#firehose_stream AppfabricIngestionDestination#firehose_stream}

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.s3Bucket"></a>

```go
S3Bucket interface{}
```

- *Type:* interface{}

s3_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#s3_bucket AppfabricIngestionDestination#s3_bucket}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

&appfabricingestiondestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream {
	StreamName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.property.streamName">StreamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#stream_name AppfabricIngestionDestination#stream_name}. |

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.property.streamName"></a>

```go
StreamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#stream_name AppfabricIngestionDestination#stream_name}.

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

&appfabricingestiondestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket {
	BucketName: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#bucket_name AppfabricIngestionDestination#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#prefix AppfabricIngestionDestination#prefix}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#bucket_name AppfabricIngestionDestination#bucket_name}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#prefix AppfabricIngestionDestination#prefix}.

---

### AppfabricIngestionDestinationProcessingConfiguration <a name="AppfabricIngestionDestinationProcessingConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

&appfabricingestiondestination.AppfabricIngestionDestinationProcessingConfiguration {
	AuditLog: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.property.auditLog">AuditLog</a></code> | <code>interface{}</code> | audit_log block. |

---

##### `AuditLog`<sup>Optional</sup> <a name="AuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.property.auditLog"></a>

```go
AuditLog interface{}
```

- *Type:* interface{}

audit_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}

---

### AppfabricIngestionDestinationProcessingConfigurationAuditLog <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

&appfabricingestiondestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog {
	Format: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#format AppfabricIngestionDestination#format}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.schema">Schema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#schema AppfabricIngestionDestination#schema}. |

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#format AppfabricIngestionDestination#format}.

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#schema AppfabricIngestionDestination#schema}.

---

### AppfabricIngestionDestinationTimeouts <a name="AppfabricIngestionDestinationTimeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

&appfabricingestiondestination.AppfabricIngestionDestinationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#create AppfabricIngestionDestination#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#delete AppfabricIngestionDestination#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/appfabric_ingestion_destination#update AppfabricIngestionDestination#update}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.get"></a>

```go
func Get(index *f64) AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamNameInput"></a>

```go
func StreamNameInput() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.get"></a>

```go
func Get(index *f64) AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream">PutFirehoseStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket">PutS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetFirehoseStream">ResetFirehoseStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFirehoseStream` <a name="PutFirehoseStream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream"></a>

```go
func PutFirehoseStream(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream.parameter.value"></a>

- *Type:* interface{}

---

##### `PutS3Bucket` <a name="PutS3Bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket"></a>

```go
func PutS3Bucket(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFirehoseStream` <a name="ResetFirehoseStream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetFirehoseStream"></a>

```go
func ResetFirehoseStream()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetS3Bucket"></a>

```go
func ResetS3Bucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStream">FirehoseStream</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStreamInput">FirehoseStreamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirehoseStream`<sup>Required</sup> <a name="FirehoseStream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStream"></a>

```go
func FirehoseStream() AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList</a>

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList</a>

---

##### `FirehoseStreamInput`<sup>Optional</sup> <a name="FirehoseStreamInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStreamInput"></a>

```go
func FirehoseStreamInput() interface{}
```

- *Type:* interface{}

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.get"></a>

```go
func Get(index *f64) AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogList <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationDestinationConfigurationAuditLogList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricIngestionDestinationDestinationConfigurationAuditLogList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.get"></a>

```go
func Get(index *f64) AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination"></a>

```go
func PutDestination(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resetDestination"></a>

```go
func ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destinationInput">DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destination"></a>

```go
func Destination() AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destinationInput"></a>

```go
func DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationDestinationConfigurationList <a name="AppfabricIngestionDestinationDestinationConfigurationList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationDestinationConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricIngestionDestinationDestinationConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.get"></a>

```go
func Get(index *f64) AppfabricIngestionDestinationDestinationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationDestinationConfigurationOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationDestinationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricIngestionDestinationDestinationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog">PutAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resetAuditLog">ResetAuditLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuditLog` <a name="PutAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog"></a>

```go
func PutAuditLog(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuditLog` <a name="ResetAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resetAuditLog"></a>

```go
func ResetAuditLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLog">AuditLog</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList">AppfabricIngestionDestinationDestinationConfigurationAuditLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLogInput">AuditLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditLog`<sup>Required</sup> <a name="AuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLog"></a>

```go
func AuditLog() AppfabricIngestionDestinationDestinationConfigurationAuditLogList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList">AppfabricIngestionDestinationDestinationConfigurationAuditLogList</a>

---

##### `AuditLogInput`<sup>Optional</sup> <a name="AuditLogInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLogInput"></a>

```go
func AuditLogInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationProcessingConfigurationAuditLogList <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLogList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationProcessingConfigurationAuditLogList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricIngestionDestinationProcessingConfigurationAuditLogList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.get"></a>

```go
func Get(index *f64) AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationProcessingConfigurationList <a name="AppfabricIngestionDestinationProcessingConfigurationList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationProcessingConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricIngestionDestinationProcessingConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.get"></a>

```go
func Get(index *f64) AppfabricIngestionDestinationProcessingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationProcessingConfigurationOutputReference <a name="AppfabricIngestionDestinationProcessingConfigurationOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationProcessingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricIngestionDestinationProcessingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog">PutAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resetAuditLog">ResetAuditLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuditLog` <a name="PutAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog"></a>

```go
func PutAuditLog(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuditLog` <a name="ResetAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resetAuditLog"></a>

```go
func ResetAuditLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLog">AuditLog</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList">AppfabricIngestionDestinationProcessingConfigurationAuditLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLogInput">AuditLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditLog`<sup>Required</sup> <a name="AuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLog"></a>

```go
func AuditLog() AppfabricIngestionDestinationProcessingConfigurationAuditLogList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList">AppfabricIngestionDestinationProcessingConfigurationAuditLogList</a>

---

##### `AuditLogInput`<sup>Optional</sup> <a name="AuditLogInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLogInput"></a>

```go
func AuditLogInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricIngestionDestinationTimeoutsOutputReference <a name="AppfabricIngestionDestinationTimeoutsOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/appfabricingestiondestination"

appfabricingestiondestination.NewAppfabricIngestionDestinationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppfabricIngestionDestinationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



