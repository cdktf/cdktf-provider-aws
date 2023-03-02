# `dataAwsNetworkfirewallFirewall` Submodule <a name="`dataAwsNetworkfirewallFirewall` Submodule" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNetworkfirewallFirewall <a name="DataAwsNetworkfirewallFirewall" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall aws_networkfirewall_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewall(scope Construct, id *string, config DataAwsNetworkfirewallFirewallConfig) DataAwsNetworkfirewallFirewall
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig">DataAwsNetworkfirewallFirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig">DataAwsNetworkfirewallFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetArn"></a>

```go
func ResetArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.DataAwsNetworkfirewallFirewall_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.DataAwsNetworkfirewallFirewall_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.DataAwsNetworkfirewallFirewall_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.deleteProtection">DeleteProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList">DataAwsNetworkfirewallFirewallEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.firewallPolicyArn">FirewallPolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.firewallPolicyChangeProtection">FirewallPolicyChangeProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.firewallStatus">FirewallStatus</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList">DataAwsNetworkfirewallFirewallFirewallStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.subnetChangeProtection">SubnetChangeProtection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.subnetMapping">SubnetMapping</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList">DataAwsNetworkfirewallFirewallSubnetMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.updateToken">UpdateToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DeleteProtection`<sup>Required</sup> <a name="DeleteProtection" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.deleteProtection"></a>

```go
func DeleteProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() DataAwsNetworkfirewallFirewallEncryptionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList">DataAwsNetworkfirewallFirewallEncryptionConfigurationList</a>

---

##### `FirewallPolicyArn`<sup>Required</sup> <a name="FirewallPolicyArn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.firewallPolicyArn"></a>

```go
func FirewallPolicyArn() *string
```

- *Type:* *string

---

##### `FirewallPolicyChangeProtection`<sup>Required</sup> <a name="FirewallPolicyChangeProtection" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.firewallPolicyChangeProtection"></a>

```go
func FirewallPolicyChangeProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FirewallStatus`<sup>Required</sup> <a name="FirewallStatus" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.firewallStatus"></a>

```go
func FirewallStatus() DataAwsNetworkfirewallFirewallFirewallStatusList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList">DataAwsNetworkfirewallFirewallFirewallStatusList</a>

---

##### `SubnetChangeProtection`<sup>Required</sup> <a name="SubnetChangeProtection" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.subnetChangeProtection"></a>

```go
func SubnetChangeProtection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SubnetMapping`<sup>Required</sup> <a name="SubnetMapping" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.subnetMapping"></a>

```go
func SubnetMapping() DataAwsNetworkfirewallFirewallSubnetMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList">DataAwsNetworkfirewallFirewallSubnetMappingList</a>

---

##### `UpdateToken`<sup>Required</sup> <a name="UpdateToken" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.updateToken"></a>

```go
func UpdateToken() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewall.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNetworkfirewallFirewallConfig <a name="DataAwsNetworkfirewallFirewallConfig" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

&dataawsnetworkfirewallfirewall.DataAwsNetworkfirewallFirewallConfig {
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
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#arn DataAwsNetworkfirewallFirewall#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#id DataAwsNetworkfirewallFirewall#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#name DataAwsNetworkfirewallFirewall#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#tags DataAwsNetworkfirewallFirewall#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#arn DataAwsNetworkfirewallFirewall#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#id DataAwsNetworkfirewallFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#name DataAwsNetworkfirewallFirewall#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall#tags DataAwsNetworkfirewallFirewall#tags}.

---

### DataAwsNetworkfirewallFirewallEncryptionConfiguration <a name="DataAwsNetworkfirewallFirewallEncryptionConfiguration" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

&dataawsnetworkfirewallfirewall.DataAwsNetworkfirewallFirewallEncryptionConfiguration {

}
```


### DataAwsNetworkfirewallFirewallFirewallStatus <a name="DataAwsNetworkfirewallFirewallFirewallStatus" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

&dataawsnetworkfirewallfirewall.DataAwsNetworkfirewallFirewallFirewallStatus {

}
```


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

&dataawsnetworkfirewallfirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary {

}
```


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

&dataawsnetworkfirewallfirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs {

}
```


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

&dataawsnetworkfirewallfirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences {

}
```


### DataAwsNetworkfirewallFirewallFirewallStatusSyncStates <a name="DataAwsNetworkfirewallFirewallFirewallStatusSyncStates" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

&dataawsnetworkfirewallfirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStates {

}
```


### DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment <a name="DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

&dataawsnetworkfirewallfirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment {

}
```


### DataAwsNetworkfirewallFirewallSubnetMapping <a name="DataAwsNetworkfirewallFirewallSubnetMapping" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

&dataawsnetworkfirewallfirewall.DataAwsNetworkfirewallFirewallSubnetMapping {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsNetworkfirewallFirewallEncryptionConfigurationList <a name="DataAwsNetworkfirewallFirewallEncryptionConfigurationList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallEncryptionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallEncryptionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference <a name="DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfiguration">DataAwsNetworkfirewallFirewallEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallEncryptionConfiguration">DataAwsNetworkfirewallFirewallEncryptionConfiguration</a>

---


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.resolvedCidrCount">ResolvedCidrCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResolvedCidrCount`<sup>Required</sup> <a name="ResolvedCidrCount" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.resolvedCidrCount"></a>

```go
func ResolvedCidrCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences</a>

---


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.availableCidrCount">AvailableCidrCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.ipSetReferences">IpSetReferences</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.utilizedCidrCount">UtilizedCidrCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableCidrCount`<sup>Required</sup> <a name="AvailableCidrCount" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.availableCidrCount"></a>

```go
func AvailableCidrCount() *f64
```

- *Type:* *f64

---

##### `IpSetReferences`<sup>Required</sup> <a name="IpSetReferences" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.ipSetReferences"></a>

```go
func IpSetReferences() DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList</a>

---

##### `UtilizedCidrCount`<sup>Required</sup> <a name="UtilizedCidrCount" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.utilizedCidrCount"></a>

```go
func UtilizedCidrCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs</a>

---


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference <a name="DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.cidrs">Cidrs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.cidrs"></a>

```go
func Cidrs() DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary</a>

---


### DataAwsNetworkfirewallFirewallFirewallStatusList <a name="DataAwsNetworkfirewallFirewallFirewallStatusList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallFirewallStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallFirewallStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallFirewallStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallFirewallStatusOutputReference <a name="DataAwsNetworkfirewallFirewallFirewallStatusOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallFirewallStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallFirewallStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.capacityUsageSummary">CapacityUsageSummary</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.configurationSyncStateSummary">ConfigurationSyncStateSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.syncStates">SyncStates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList">DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatus">DataAwsNetworkfirewallFirewallFirewallStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityUsageSummary`<sup>Required</sup> <a name="CapacityUsageSummary" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.capacityUsageSummary"></a>

```go
func CapacityUsageSummary() DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList">DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList</a>

---

##### `ConfigurationSyncStateSummary`<sup>Required</sup> <a name="ConfigurationSyncStateSummary" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.configurationSyncStateSummary"></a>

```go
func ConfigurationSyncStateSummary() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SyncStates`<sup>Required</sup> <a name="SyncStates" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.syncStates"></a>

```go
func SyncStates() DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList">DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallFirewallStatus
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatus">DataAwsNetworkfirewallFirewallFirewallStatus</a>

---


### DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList <a name="DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference <a name="DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment">DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment">DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment</a>

---


### DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList <a name="DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference <a name="DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.attachment">Attachment</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList">DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStates">DataAwsNetworkfirewallFirewallFirewallStatusSyncStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attachment`<sup>Required</sup> <a name="Attachment" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.attachment"></a>

```go
func Attachment() DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList">DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallFirewallStatusSyncStates
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallFirewallStatusSyncStates">DataAwsNetworkfirewallFirewallFirewallStatusSyncStates</a>

---


### DataAwsNetworkfirewallFirewallSubnetMappingList <a name="DataAwsNetworkfirewallFirewallSubnetMappingList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallSubnetMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallSubnetMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallSubnetMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallSubnetMappingOutputReference <a name="DataAwsNetworkfirewallFirewallSubnetMappingOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewall"

dataawsnetworkfirewallfirewall.NewDataAwsNetworkfirewallFirewallSubnetMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallSubnetMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMapping">DataAwsNetworkfirewallFirewallSubnetMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallSubnetMapping
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewall.DataAwsNetworkfirewallFirewallSubnetMapping">DataAwsNetworkfirewallFirewallSubnetMapping</a>

---



