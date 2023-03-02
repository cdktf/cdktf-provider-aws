# `dataAwsNetworkfirewallFirewallPolicy` Submodule <a name="`dataAwsNetworkfirewallFirewallPolicy` Submodule" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNetworkfirewallFirewallPolicy <a name="DataAwsNetworkfirewallFirewallPolicy" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall_policy aws_networkfirewall_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicy(scope Construct, id *string, config DataAwsNetworkfirewallFirewallPolicyConfig) DataAwsNetworkfirewallFirewallPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig">DataAwsNetworkfirewallFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig">DataAwsNetworkfirewallFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetArn"></a>

```go
func ResetArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.DataAwsNetworkfirewallFirewallPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.DataAwsNetworkfirewallFirewallPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.DataAwsNetworkfirewallFirewallPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.firewallPolicy">FirewallPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.updateToken">UpdateToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.firewallPolicy"></a>

```go
func FirewallPolicy() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList</a>

---

##### `UpdateToken`<sup>Required</sup> <a name="UpdateToken" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.updateToken"></a>

```go
func UpdateToken() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNetworkfirewallFirewallPolicyConfig <a name="DataAwsNetworkfirewallFirewallPolicyConfig" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

&dataawsnetworkfirewallfirewallpolicy.DataAwsNetworkfirewallFirewallPolicyConfig {
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
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall_policy#arn DataAwsNetworkfirewallFirewallPolicy#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall_policy#id DataAwsNetworkfirewallFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall_policy#name DataAwsNetworkfirewallFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall_policy#tags DataAwsNetworkfirewallFirewallPolicy#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall_policy#arn DataAwsNetworkfirewallFirewallPolicy#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall_policy#id DataAwsNetworkfirewallFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall_policy#name DataAwsNetworkfirewallFirewallPolicy#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkfirewall_firewall_policy#tags DataAwsNetworkfirewallFirewallPolicy#tags}.

---

### DataAwsNetworkfirewallFirewallPolicyFirewallPolicy <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicy" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

&dataawsnetworkfirewallfirewallpolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicy {

}
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

&dataawsnetworkfirewallfirewallpolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions {

}
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

&dataawsnetworkfirewallfirewallpolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference {

}
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

&dataawsnetworkfirewallfirewallpolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction {

}
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

&dataawsnetworkfirewallfirewallpolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {

}
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

&dataawsnetworkfirewallfirewallpolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {

}
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

&dataawsnetworkfirewallfirewallpolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {

}
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

&dataawsnetworkfirewallfirewallpolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActions">StatefulDefaultActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptions">StatefulEngineOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReference">StatefulRuleGroupReference</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomAction">StatelessCustomAction</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActions">StatelessDefaultActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActions">StatelessFragmentDefaultActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReference">StatelessRuleGroupReference</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicy">DataAwsNetworkfirewallFirewallPolicyFirewallPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatefulDefaultActions`<sup>Required</sup> <a name="StatefulDefaultActions" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActions"></a>

```go
func StatefulDefaultActions() *[]*string
```

- *Type:* *[]*string

---

##### `StatefulEngineOptions`<sup>Required</sup> <a name="StatefulEngineOptions" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptions"></a>

```go
func StatefulEngineOptions() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList</a>

---

##### `StatefulRuleGroupReference`<sup>Required</sup> <a name="StatefulRuleGroupReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReference"></a>

```go
func StatefulRuleGroupReference() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList</a>

---

##### `StatelessCustomAction`<sup>Required</sup> <a name="StatelessCustomAction" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomAction"></a>

```go
func StatelessCustomAction() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList</a>

---

##### `StatelessDefaultActions`<sup>Required</sup> <a name="StatelessDefaultActions" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActions"></a>

```go
func StatelessDefaultActions() *[]*string
```

- *Type:* *[]*string

---

##### `StatelessFragmentDefaultActions`<sup>Required</sup> <a name="StatelessFragmentDefaultActions" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActions"></a>

```go
func StatelessFragmentDefaultActions() *[]*string
```

- *Type:* *[]*string

---

##### `StatelessRuleGroupReference`<sup>Required</sup> <a name="StatelessRuleGroupReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReference"></a>

```go
func StatelessRuleGroupReference() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallPolicyFirewallPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicy">DataAwsNetworkfirewallFirewallPolicyFirewallPolicy</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrder">RuleOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleOrder`<sup>Required</sup> <a name="RuleOrder" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrder"></a>

```go
func RuleOrder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.publishMetricAction">PublishMetricAction</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublishMetricAction`<sup>Required</sup> <a name="PublishMetricAction" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.publishMetricAction"></a>

```go
func PublishMetricAction() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.dimension"></a>

```go
func Dimension() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.actionDefinition">ActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionDefinition`<sup>Required</sup> <a name="ActionDefinition" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.actionDefinition"></a>

```go
func ActionDefinition() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList</a>

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.get"></a>

```go
func Get(index *f64) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkfirewallfirewallpolicy"

dataawsnetworkfirewallfirewallpolicy.NewDataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference</a>

---



