# `dataAwsEc2TransitGatewayVpcAttachment` Submodule <a name="`dataAwsEc2TransitGatewayVpcAttachment` Submodule" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayVpcAttachment <a name="DataAwsEc2TransitGatewayVpcAttachment" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment aws_ec2_transit_gateway_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachment"

dataawsec2transitgatewayvpcattachment.NewDataAwsEc2TransitGatewayVpcAttachment(scope Construct, id *string, config DataAwsEc2TransitGatewayVpcAttachmentConfig) DataAwsEc2TransitGatewayVpcAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig">DataAwsEc2TransitGatewayVpcAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig">DataAwsEc2TransitGatewayVpcAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.putTimeouts"></a>

```go
func PutTimeouts(value DataAwsEc2TransitGatewayVpcAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeouts">DataAwsEc2TransitGatewayVpcAttachmentTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachment"

dataawsec2transitgatewayvpcattachment.DataAwsEc2TransitGatewayVpcAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachment"

dataawsec2transitgatewayvpcattachment.DataAwsEc2TransitGatewayVpcAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachment"

dataawsec2transitgatewayvpcattachment.DataAwsEc2TransitGatewayVpcAttachment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.applianceModeSupport">ApplianceModeSupport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.dnsSupport">DnsSupport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList">DataAwsEc2TransitGatewayVpcAttachmentFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.ipv6Support">Ipv6Support</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference">DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.vpcOwnerId">VpcOwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApplianceModeSupport`<sup>Required</sup> <a name="ApplianceModeSupport" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.applianceModeSupport"></a>

```go
func ApplianceModeSupport() *string
```

- *Type:* *string

---

##### `DnsSupport`<sup>Required</sup> <a name="DnsSupport" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.dnsSupport"></a>

```go
func DnsSupport() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.filter"></a>

```go
func Filter() DataAwsEc2TransitGatewayVpcAttachmentFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList">DataAwsEc2TransitGatewayVpcAttachmentFilterList</a>

---

##### `Ipv6Support`<sup>Required</sup> <a name="Ipv6Support" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.ipv6Support"></a>

```go
func Ipv6Support() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.timeouts"></a>

```go
func Timeouts() DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference">DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference</a>

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.transitGatewayId"></a>

```go
func TransitGatewayId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `VpcOwnerId`<sup>Required</sup> <a name="VpcOwnerId" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.vpcOwnerId"></a>

```go
func VpcOwnerId() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayVpcAttachmentConfig <a name="DataAwsEc2TransitGatewayVpcAttachmentConfig" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachment"

&dataawsec2transitgatewayvpcattachment.DataAwsEc2TransitGatewayVpcAttachmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: interface{},
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment#id DataAwsEc2TransitGatewayVpcAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment#tags DataAwsEc2TransitGatewayVpcAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeouts">DataAwsEc2TransitGatewayVpcAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment#filter DataAwsEc2TransitGatewayVpcAttachment#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment#id DataAwsEc2TransitGatewayVpcAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment#tags DataAwsEc2TransitGatewayVpcAttachment#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentConfig.property.timeouts"></a>

```go
Timeouts DataAwsEc2TransitGatewayVpcAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeouts">DataAwsEc2TransitGatewayVpcAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment#timeouts DataAwsEc2TransitGatewayVpcAttachment#timeouts}

---

### DataAwsEc2TransitGatewayVpcAttachmentFilter <a name="DataAwsEc2TransitGatewayVpcAttachmentFilter" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachment"

&dataawsec2transitgatewayvpcattachment.DataAwsEc2TransitGatewayVpcAttachmentFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment#name DataAwsEc2TransitGatewayVpcAttachment#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment#values DataAwsEc2TransitGatewayVpcAttachment#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment#name DataAwsEc2TransitGatewayVpcAttachment#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment#values DataAwsEc2TransitGatewayVpcAttachment#values}.

---

### DataAwsEc2TransitGatewayVpcAttachmentTimeouts <a name="DataAwsEc2TransitGatewayVpcAttachmentTimeouts" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachment"

&dataawsec2transitgatewayvpcattachment.DataAwsEc2TransitGatewayVpcAttachmentTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment#read DataAwsEc2TransitGatewayVpcAttachment#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment#read DataAwsEc2TransitGatewayVpcAttachment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayVpcAttachmentFilterList <a name="DataAwsEc2TransitGatewayVpcAttachmentFilterList" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachment"

dataawsec2transitgatewayvpcattachment.NewDataAwsEc2TransitGatewayVpcAttachmentFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsEc2TransitGatewayVpcAttachmentFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.get"></a>

```go
func Get(index *f64) DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference <a name="DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachment"

dataawsec2transitgatewayvpcattachment.NewDataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsec2transitgatewayvpcattachment"

dataawsec2transitgatewayvpcattachment.NewDataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2TransitGatewayVpcAttachment.DataAwsEc2TransitGatewayVpcAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



