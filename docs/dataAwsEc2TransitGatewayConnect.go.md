# `dataAwsEc2TransitGatewayConnect` Submodule <a name="`dataAwsEc2TransitGatewayConnect` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayConnect <a name="DataAwsEc2TransitGatewayConnect" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect aws_ec2_transit_gateway_connect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsec2transitgatewayconnect"

dataawsec2transitgatewayconnect.NewDataAwsEc2TransitGatewayConnect(scope Construct, id *string, config DataAwsEc2TransitGatewayConnectConfig) DataAwsEc2TransitGatewayConnect
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig">DataAwsEc2TransitGatewayConnectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig">DataAwsEc2TransitGatewayConnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTransitGatewayConnectId">ResetTransitGatewayConnectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putTimeouts"></a>

```go
func PutTimeouts(value DataAwsEc2TransitGatewayConnectTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransitGatewayConnectId` <a name="ResetTransitGatewayConnectId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTransitGatewayConnectId"></a>

```go
func ResetTransitGatewayConnectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEc2TransitGatewayConnect resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsec2transitgatewayconnect"

dataawsec2transitgatewayconnect.DataAwsEc2TransitGatewayConnect_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsec2transitgatewayconnect"

dataawsec2transitgatewayconnect.DataAwsEc2TransitGatewayConnect_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsec2transitgatewayconnect"

dataawsec2transitgatewayconnect.DataAwsEc2TransitGatewayConnect_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsec2transitgatewayconnect"

dataawsec2transitgatewayconnect.DataAwsEc2TransitGatewayConnect_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsEc2TransitGatewayConnect resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsEc2TransitGatewayConnect to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsEc2TransitGatewayConnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayConnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList">DataAwsEc2TransitGatewayConnectFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference">DataAwsEc2TransitGatewayConnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transportAttachmentId">TransportAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayConnectIdInput">TransitGatewayConnectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayConnectId">TransitGatewayConnectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.filter"></a>

```go
func Filter() DataAwsEc2TransitGatewayConnectFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList">DataAwsEc2TransitGatewayConnectFilterList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.timeouts"></a>

```go
func Timeouts() DataAwsEc2TransitGatewayConnectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference">DataAwsEc2TransitGatewayConnectTimeoutsOutputReference</a>

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayId"></a>

```go
func TransitGatewayId() *string
```

- *Type:* *string

---

##### `TransportAttachmentId`<sup>Required</sup> <a name="TransportAttachmentId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transportAttachmentId"></a>

```go
func TransportAttachmentId() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitGatewayConnectIdInput`<sup>Optional</sup> <a name="TransitGatewayConnectIdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayConnectIdInput"></a>

```go
func TransitGatewayConnectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransitGatewayConnectId`<sup>Required</sup> <a name="TransitGatewayConnectId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayConnectId"></a>

```go
func TransitGatewayConnectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayConnectConfig <a name="DataAwsEc2TransitGatewayConnectConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsec2transitgatewayconnect"

&dataawsec2transitgatewayconnect.DataAwsEc2TransitGatewayConnectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: interface{},
	Id: *string,
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts,
	TransitGatewayConnectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#id DataAwsEc2TransitGatewayConnect#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#tags DataAwsEc2TransitGatewayConnect#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.transitGatewayConnectId">TransitGatewayConnectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#transit_gateway_connect_id DataAwsEc2TransitGatewayConnect#transit_gateway_connect_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#filter DataAwsEc2TransitGatewayConnect#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#id DataAwsEc2TransitGatewayConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#region DataAwsEc2TransitGatewayConnect#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#tags DataAwsEc2TransitGatewayConnect#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.timeouts"></a>

```go
Timeouts DataAwsEc2TransitGatewayConnectTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#timeouts DataAwsEc2TransitGatewayConnect#timeouts}

---

##### `TransitGatewayConnectId`<sup>Optional</sup> <a name="TransitGatewayConnectId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.transitGatewayConnectId"></a>

```go
TransitGatewayConnectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#transit_gateway_connect_id DataAwsEc2TransitGatewayConnect#transit_gateway_connect_id}.

---

### DataAwsEc2TransitGatewayConnectFilter <a name="DataAwsEc2TransitGatewayConnectFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsec2transitgatewayconnect"

&dataawsec2transitgatewayconnect.DataAwsEc2TransitGatewayConnectFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#name DataAwsEc2TransitGatewayConnect#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#values DataAwsEc2TransitGatewayConnect#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#name DataAwsEc2TransitGatewayConnect#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#values DataAwsEc2TransitGatewayConnect#values}.

---

### DataAwsEc2TransitGatewayConnectTimeouts <a name="DataAwsEc2TransitGatewayConnectTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsec2transitgatewayconnect"

&dataawsec2transitgatewayconnect.DataAwsEc2TransitGatewayConnectTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#read DataAwsEc2TransitGatewayConnect#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/ec2_transit_gateway_connect#read DataAwsEc2TransitGatewayConnect#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayConnectFilterList <a name="DataAwsEc2TransitGatewayConnectFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsec2transitgatewayconnect"

dataawsec2transitgatewayconnect.NewDataAwsEc2TransitGatewayConnectFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsEc2TransitGatewayConnectFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.get"></a>

```go
func Get(index *f64) DataAwsEc2TransitGatewayConnectFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsEc2TransitGatewayConnectFilterOutputReference <a name="DataAwsEc2TransitGatewayConnectFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsec2transitgatewayconnect"

dataawsec2transitgatewayconnect.NewDataAwsEc2TransitGatewayConnectFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsEc2TransitGatewayConnectFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsEc2TransitGatewayConnectTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayConnectTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsec2transitgatewayconnect"

dataawsec2transitgatewayconnect.NewDataAwsEc2TransitGatewayConnectTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsEc2TransitGatewayConnectTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



