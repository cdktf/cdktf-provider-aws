# `dataAwsGlobalacceleratorCustomRoutingAccelerator` Submodule <a name="`dataAwsGlobalacceleratorCustomRoutingAccelerator` Submodule" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlobalacceleratorCustomRoutingAccelerator <a name="DataAwsGlobalacceleratorCustomRoutingAccelerator" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_custom_routing_accelerator aws_globalaccelerator_custom_routing_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsglobalacceleratorcustomroutingaccelerator"

dataawsglobalacceleratorcustomroutingaccelerator.NewDataAwsGlobalacceleratorCustomRoutingAccelerator(scope Construct, id *string, config DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig) DataAwsGlobalacceleratorCustomRoutingAccelerator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig">DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig">DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetArn"></a>

```go
func ResetArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsglobalacceleratorcustomroutingaccelerator"

dataawsglobalacceleratorcustomroutingaccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsglobalacceleratorcustomroutingaccelerator"

dataawsglobalacceleratorcustomroutingaccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsglobalacceleratorcustomroutingaccelerator"

dataawsglobalacceleratorcustomroutingaccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList">DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.ipSets">IpSets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList">DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.attributes"></a>

```go
func Attributes() DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList">DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `IpSets`<sup>Required</sup> <a name="IpSets" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.ipSets"></a>

```go
func IpSets() DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList">DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsglobalacceleratorcustomroutingaccelerator"

&dataawsglobalacceleratorcustomroutingaccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes {

}
```


### DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsglobalacceleratorcustomroutingaccelerator"

&dataawsglobalacceleratorcustomroutingaccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	Id: *string,
	Name: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_custom_routing_accelerator#arn DataAwsGlobalacceleratorCustomRoutingAccelerator#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_custom_routing_accelerator#id DataAwsGlobalacceleratorCustomRoutingAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_custom_routing_accelerator#name DataAwsGlobalacceleratorCustomRoutingAccelerator#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_custom_routing_accelerator#tags DataAwsGlobalacceleratorCustomRoutingAccelerator#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_custom_routing_accelerator#arn DataAwsGlobalacceleratorCustomRoutingAccelerator#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_custom_routing_accelerator#id DataAwsGlobalacceleratorCustomRoutingAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_custom_routing_accelerator#name DataAwsGlobalacceleratorCustomRoutingAccelerator#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_custom_routing_accelerator#tags DataAwsGlobalacceleratorCustomRoutingAccelerator#tags}.

---

### DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsglobalacceleratorcustomroutingaccelerator"

&dataawsglobalacceleratorcustomroutingaccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsglobalacceleratorcustomroutingaccelerator"

dataawsglobalacceleratorcustomroutingaccelerator.NewDataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.get"></a>

```go
func Get(index *f64) DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsglobalacceleratorcustomroutingaccelerator"

dataawsglobalacceleratorcustomroutingaccelerator.NewDataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabled">FlowLogsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Bucket">FlowLogsS3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Prefix">FlowLogsS3Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes">DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlowLogsEnabled`<sup>Required</sup> <a name="FlowLogsEnabled" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabled"></a>

```go
func FlowLogsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FlowLogsS3Bucket`<sup>Required</sup> <a name="FlowLogsS3Bucket" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Bucket"></a>

```go
func FlowLogsS3Bucket() *string
```

- *Type:* *string

---

##### `FlowLogsS3Prefix`<sup>Required</sup> <a name="FlowLogsS3Prefix" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Prefix"></a>

```go
func FlowLogsS3Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes">DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes</a>

---


### DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsglobalacceleratorcustomroutingaccelerator"

dataawsglobalacceleratorcustomroutingaccelerator.NewDataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.get"></a>

```go
func Get(index *f64) DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsglobalacceleratorcustomroutingaccelerator"

dataawsglobalacceleratorcustomroutingaccelerator.NewDataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipFamily">IpFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets">DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `IpFamily`<sup>Required</sup> <a name="IpFamily" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipFamily"></a>

```go
func IpFamily() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets">DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets</a>

---



