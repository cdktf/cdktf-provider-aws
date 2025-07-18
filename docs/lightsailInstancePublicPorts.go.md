# `lightsailInstancePublicPorts` Submodule <a name="`lightsailInstancePublicPorts` Submodule" id="@cdktf/provider-aws.lightsailInstancePublicPorts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailInstancePublicPorts <a name="LightsailInstancePublicPorts" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports aws_lightsail_instance_public_ports}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lightsailinstancepublicports"

lightsailinstancepublicports.NewLightsailInstancePublicPorts(scope Construct, id *string, config LightsailInstancePublicPortsConfig) LightsailInstancePublicPorts
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig">LightsailInstancePublicPortsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig">LightsailInstancePublicPortsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo">PutPortInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPortInfo` <a name="PutPortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo"></a>

```go
func PutPortInfo(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.putPortInfo.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LightsailInstancePublicPorts resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lightsailinstancepublicports"

lightsailinstancepublicports.LightsailInstancePublicPorts_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lightsailinstancepublicports"

lightsailinstancepublicports.LightsailInstancePublicPorts_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lightsailinstancepublicports"

lightsailinstancepublicports.LightsailInstancePublicPorts_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lightsailinstancepublicports"

lightsailinstancepublicports.LightsailInstancePublicPorts_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LightsailInstancePublicPorts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LightsailInstancePublicPorts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LightsailInstancePublicPorts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LightsailInstancePublicPorts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfo">PortInfo</a></code> | <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList">LightsailInstancePublicPortsPortInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfoInput">PortInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PortInfo`<sup>Required</sup> <a name="PortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfo"></a>

```go
func PortInfo() LightsailInstancePublicPortsPortInfoList
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList">LightsailInstancePublicPortsPortInfoList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `PortInfoInput`<sup>Optional</sup> <a name="PortInfoInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.portInfoInput"></a>

```go
func PortInfoInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPorts.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailInstancePublicPortsConfig <a name="LightsailInstancePublicPortsConfig" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lightsailinstancepublicports"

&lightsailinstancepublicports.LightsailInstancePublicPortsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceName: *string,
	PortInfo: interface{},
	Id: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.instanceName">InstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.portInfo">PortInfo</a></code> | <code>interface{}</code> | port_info block. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#instance_name LightsailInstancePublicPorts#instance_name}.

---

##### `PortInfo`<sup>Required</sup> <a name="PortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.portInfo"></a>

```go
PortInfo interface{}
```

- *Type:* interface{}

port_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#port_info LightsailInstancePublicPorts#port_info}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#id LightsailInstancePublicPorts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#region LightsailInstancePublicPorts#region}

---

### LightsailInstancePublicPortsPortInfo <a name="LightsailInstancePublicPortsPortInfo" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lightsailinstancepublicports"

&lightsailinstancepublicports.LightsailInstancePublicPortsPortInfo {
	FromPort: *f64,
	Protocol: *string,
	ToPort: *f64,
	CidrListAliases: *[]*string,
	Cidrs: *[]*string,
	Ipv6Cidrs: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrListAliases">CidrListAliases</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrs">Cidrs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.ipv6Cidrs">Ipv6Cidrs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#from_port LightsailInstancePublicPorts#from_port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#protocol LightsailInstancePublicPorts#protocol}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#to_port LightsailInstancePublicPorts#to_port}.

---

##### `CidrListAliases`<sup>Optional</sup> <a name="CidrListAliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrListAliases"></a>

```go
CidrListAliases *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#cidr_list_aliases LightsailInstancePublicPorts#cidr_list_aliases}.

---

##### `Cidrs`<sup>Optional</sup> <a name="Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.cidrs"></a>

```go
Cidrs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#cidrs LightsailInstancePublicPorts#cidrs}.

---

##### `Ipv6Cidrs`<sup>Optional</sup> <a name="Ipv6Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfo.property.ipv6Cidrs"></a>

```go
Ipv6Cidrs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_instance_public_ports#ipv6_cidrs LightsailInstancePublicPorts#ipv6_cidrs}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailInstancePublicPortsPortInfoList <a name="LightsailInstancePublicPortsPortInfoList" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lightsailinstancepublicports"

lightsailinstancepublicports.NewLightsailInstancePublicPortsPortInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailInstancePublicPortsPortInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get"></a>

```go
func Get(index *f64) LightsailInstancePublicPortsPortInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailInstancePublicPortsPortInfoOutputReference <a name="LightsailInstancePublicPortsPortInfoOutputReference" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lightsailinstancepublicports"

lightsailinstancepublicports.NewLightsailInstancePublicPortsPortInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailInstancePublicPortsPortInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrListAliases">ResetCidrListAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrs">ResetCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetIpv6Cidrs">ResetIpv6Cidrs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrListAliases` <a name="ResetCidrListAliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrListAliases"></a>

```go
func ResetCidrListAliases()
```

##### `ResetCidrs` <a name="ResetCidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetCidrs"></a>

```go
func ResetCidrs()
```

##### `ResetIpv6Cidrs` <a name="ResetIpv6Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.resetIpv6Cidrs"></a>

```go
func ResetIpv6Cidrs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliasesInput">CidrListAliasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrsInput">CidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6CidrsInput">Ipv6CidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliases">CidrListAliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrs">Cidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6Cidrs">Ipv6Cidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrListAliasesInput`<sup>Optional</sup> <a name="CidrListAliasesInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliasesInput"></a>

```go
func CidrListAliasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CidrsInput`<sup>Optional</sup> <a name="CidrsInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrsInput"></a>

```go
func CidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrsInput`<sup>Optional</sup> <a name="Ipv6CidrsInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6CidrsInput"></a>

```go
func Ipv6CidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `CidrListAliases`<sup>Required</sup> <a name="CidrListAliases" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrListAliases"></a>

```go
func CidrListAliases() *[]*string
```

- *Type:* *[]*string

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.cidrs"></a>

```go
func Cidrs() *[]*string
```

- *Type:* *[]*string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `Ipv6Cidrs`<sup>Required</sup> <a name="Ipv6Cidrs" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.ipv6Cidrs"></a>

```go
func Ipv6Cidrs() *[]*string
```

- *Type:* *[]*string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lightsailInstancePublicPorts.LightsailInstancePublicPortsPortInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



