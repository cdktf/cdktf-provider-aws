# `dataAwsEc2TransitGatewayVpcAttachments` Submodule <a name="`dataAwsEc2TransitGatewayVpcAttachments` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayVpcAttachments <a name="DataAwsEc2TransitGatewayVpcAttachments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments aws_ec2_transit_gateway_vpc_attachments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachments"

dataawsec2transitgatewayvpcattachments.NewDataAwsEc2TransitGatewayVpcAttachments(scope Construct, id *string, config DataAwsEc2TransitGatewayVpcAttachmentsConfig) DataAwsEc2TransitGatewayVpcAttachments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig">DataAwsEc2TransitGatewayVpcAttachmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig">DataAwsEc2TransitGatewayVpcAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putTimeouts"></a>

```go
func PutTimeouts(value DataAwsEc2TransitGatewayVpcAttachmentsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachments"

dataawsec2transitgatewayvpcattachments.DataAwsEc2TransitGatewayVpcAttachments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachments"

dataawsec2transitgatewayvpcattachments.DataAwsEc2TransitGatewayVpcAttachments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachments"

dataawsec2transitgatewayvpcattachments.DataAwsEc2TransitGatewayVpcAttachments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList">DataAwsEc2TransitGatewayVpcAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference">DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.filter"></a>

```go
func Filter() DataAwsEc2TransitGatewayVpcAttachmentsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList">DataAwsEc2TransitGatewayVpcAttachmentsFilterList</a>

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.timeouts"></a>

```go
func Timeouts() DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference">DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayVpcAttachmentsConfig <a name="DataAwsEc2TransitGatewayVpcAttachmentsConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachments"

&dataawsec2transitgatewayvpcattachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#id DataAwsEc2TransitGatewayVpcAttachments#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#filter DataAwsEc2TransitGatewayVpcAttachments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#id DataAwsEc2TransitGatewayVpcAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsConfig.property.timeouts"></a>

```go
Timeouts DataAwsEc2TransitGatewayVpcAttachmentsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts">DataAwsEc2TransitGatewayVpcAttachmentsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#timeouts DataAwsEc2TransitGatewayVpcAttachments#timeouts}

---

### DataAwsEc2TransitGatewayVpcAttachmentsFilter <a name="DataAwsEc2TransitGatewayVpcAttachmentsFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachments"

&dataawsec2transitgatewayvpcattachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#name DataAwsEc2TransitGatewayVpcAttachments#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#values DataAwsEc2TransitGatewayVpcAttachments#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#name DataAwsEc2TransitGatewayVpcAttachments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#values DataAwsEc2TransitGatewayVpcAttachments#values}.

---

### DataAwsEc2TransitGatewayVpcAttachmentsTimeouts <a name="DataAwsEc2TransitGatewayVpcAttachmentsTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachments"

&dataawsec2transitgatewayvpcattachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#read DataAwsEc2TransitGatewayVpcAttachments#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachments#read DataAwsEc2TransitGatewayVpcAttachments#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayVpcAttachmentsFilterList <a name="DataAwsEc2TransitGatewayVpcAttachmentsFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachments"

dataawsec2transitgatewayvpcattachments.NewDataAwsEc2TransitGatewayVpcAttachmentsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsEc2TransitGatewayVpcAttachmentsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.get"></a>

```go
func Get(index *f64) DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference <a name="DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachments"

dataawsec2transitgatewayvpcattachments.NewDataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachments"

dataawsec2transitgatewayvpcattachments.NewDataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachments.DataAwsEc2TransitGatewayVpcAttachmentsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



