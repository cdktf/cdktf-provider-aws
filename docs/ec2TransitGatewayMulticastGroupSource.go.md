# `aws_ec2_transit_gateway_multicast_group_source`

Refer to the Terraform Registory for docs: [`aws_ec2_transit_gateway_multicast_group_source`](https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/ec2_transit_gateway_multicast_group_source).

# `ec2TransitGatewayMulticastGroupSource` Submodule <a name="`ec2TransitGatewayMulticastGroupSource` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMulticastGroupSource <a name="Ec2TransitGatewayMulticastGroupSource" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/ec2_transit_gateway_multicast_group_source aws_ec2_transit_gateway_multicast_group_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/ec2transitgatewaymulticastgroupsource"

ec2transitgatewaymulticastgroupsource.NewEc2TransitGatewayMulticastGroupSource(scope Construct, id *string, config Ec2TransitGatewayMulticastGroupSourceConfig) Ec2TransitGatewayMulticastGroupSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig">Ec2TransitGatewayMulticastGroupSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig">Ec2TransitGatewayMulticastGroupSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2TransitGatewayMulticastGroupSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/ec2transitgatewaymulticastgroupsource"

ec2transitgatewaymulticastgroupsource.Ec2TransitGatewayMulticastGroupSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/ec2transitgatewaymulticastgroupsource"

ec2transitgatewaymulticastgroupsource.Ec2TransitGatewayMulticastGroupSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/ec2transitgatewaymulticastgroupsource"

ec2transitgatewaymulticastgroupsource.Ec2TransitGatewayMulticastGroupSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/ec2transitgatewaymulticastgroupsource"

ec2transitgatewaymulticastgroupsource.Ec2TransitGatewayMulticastGroupSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Ec2TransitGatewayMulticastGroupSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2TransitGatewayMulticastGroupSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2TransitGatewayMulticastGroupSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/ec2_transit_gateway_multicast_group_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMulticastGroupSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.groupIpAddressInput">GroupIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.transitGatewayMulticastDomainIdInput">TransitGatewayMulticastDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.groupIpAddress">GroupIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.transitGatewayMulticastDomainId">TransitGatewayMulticastDomainId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupIpAddressInput`<sup>Optional</sup> <a name="GroupIpAddressInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.groupIpAddressInput"></a>

```go
func GroupIpAddressInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `TransitGatewayMulticastDomainIdInput`<sup>Optional</sup> <a name="TransitGatewayMulticastDomainIdInput" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.transitGatewayMulticastDomainIdInput"></a>

```go
func TransitGatewayMulticastDomainIdInput() *string
```

- *Type:* *string

---

##### `GroupIpAddress`<sup>Required</sup> <a name="GroupIpAddress" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.groupIpAddress"></a>

```go
func GroupIpAddress() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `TransitGatewayMulticastDomainId`<sup>Required</sup> <a name="TransitGatewayMulticastDomainId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.transitGatewayMulticastDomainId"></a>

```go
func TransitGatewayMulticastDomainId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMulticastGroupSourceConfig <a name="Ec2TransitGatewayMulticastGroupSourceConfig" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/ec2transitgatewaymulticastgroupsource"

&ec2transitgatewaymulticastgroupsource.Ec2TransitGatewayMulticastGroupSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupIpAddress: *string,
	NetworkInterfaceId: *string,
	TransitGatewayMulticastDomainId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.groupIpAddress">GroupIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/ec2_transit_gateway_multicast_group_source#group_ip_address Ec2TransitGatewayMulticastGroupSource#group_ip_address}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/ec2_transit_gateway_multicast_group_source#network_interface_id Ec2TransitGatewayMulticastGroupSource#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.transitGatewayMulticastDomainId">TransitGatewayMulticastDomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/ec2_transit_gateway_multicast_group_source#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupSource#transit_gateway_multicast_domain_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/ec2_transit_gateway_multicast_group_source#id Ec2TransitGatewayMulticastGroupSource#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupIpAddress`<sup>Required</sup> <a name="GroupIpAddress" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.groupIpAddress"></a>

```go
GroupIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/ec2_transit_gateway_multicast_group_source#group_ip_address Ec2TransitGatewayMulticastGroupSource#group_ip_address}.

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/ec2_transit_gateway_multicast_group_source#network_interface_id Ec2TransitGatewayMulticastGroupSource#network_interface_id}.

---

##### `TransitGatewayMulticastDomainId`<sup>Required</sup> <a name="TransitGatewayMulticastDomainId" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.transitGatewayMulticastDomainId"></a>

```go
TransitGatewayMulticastDomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/ec2_transit_gateway_multicast_group_source#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupSource#transit_gateway_multicast_domain_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayMulticastGroupSource.Ec2TransitGatewayMulticastGroupSourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/ec2_transit_gateway_multicast_group_source#id Ec2TransitGatewayMulticastGroupSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



