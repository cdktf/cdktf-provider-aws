# `networkfirewallLoggingConfiguration` Submodule <a name="`networkfirewallLoggingConfiguration` Submodule" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallLoggingConfiguration <a name="NetworkfirewallLoggingConfiguration" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration aws_networkfirewall_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NewNetworkfirewallLoggingConfiguration(scope Construct, id *string, config NetworkfirewallLoggingConfigurationConfig) NetworkfirewallLoggingConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig">NetworkfirewallLoggingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig">NetworkfirewallLoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.putLoggingConfiguration"></a>

```go
func PutLoggingConfiguration(value NetworkfirewallLoggingConfigurationLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration">NetworkfirewallLoggingConfigurationLoggingConfiguration</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NetworkfirewallLoggingConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NetworkfirewallLoggingConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NetworkfirewallLoggingConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference">NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.firewallArnInput">FirewallArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration">NetworkfirewallLoggingConfigurationLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.firewallArn">FirewallArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.loggingConfiguration"></a>

```go
func LoggingConfiguration() NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference">NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference</a>

---

##### `FirewallArnInput`<sup>Optional</sup> <a name="FirewallArnInput" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.firewallArnInput"></a>

```go
func FirewallArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.loggingConfigurationInput"></a>

```go
func LoggingConfigurationInput() NetworkfirewallLoggingConfigurationLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration">NetworkfirewallLoggingConfigurationLoggingConfiguration</a>

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.firewallArn"></a>

```go
func FirewallArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallLoggingConfigurationConfig <a name="NetworkfirewallLoggingConfigurationConfig" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkfirewallloggingconfiguration"

&networkfirewallloggingconfiguration.NetworkfirewallLoggingConfigurationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FirewallArn: *string,
	LoggingConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.firewallArn">FirewallArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration#firewall_arn NetworkfirewallLoggingConfiguration#firewall_arn}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration">NetworkfirewallLoggingConfigurationLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration#id NetworkfirewallLoggingConfiguration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.firewallArn"></a>

```go
FirewallArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration#firewall_arn NetworkfirewallLoggingConfiguration#firewall_arn}.

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.loggingConfiguration"></a>

```go
LoggingConfiguration NetworkfirewallLoggingConfigurationLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration">NetworkfirewallLoggingConfigurationLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration#logging_configuration NetworkfirewallLoggingConfiguration#logging_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration#id NetworkfirewallLoggingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NetworkfirewallLoggingConfigurationLoggingConfiguration <a name="NetworkfirewallLoggingConfigurationLoggingConfiguration" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkfirewallloggingconfiguration"

&networkfirewallloggingconfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration {
	LogDestinationConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration.property.logDestinationConfig">LogDestinationConfig</a></code> | <code>interface{}</code> | log_destination_config block. |

---

##### `LogDestinationConfig`<sup>Required</sup> <a name="LogDestinationConfig" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration.property.logDestinationConfig"></a>

```go
LogDestinationConfig interface{}
```

- *Type:* interface{}

log_destination_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration#log_destination_config NetworkfirewallLoggingConfiguration#log_destination_config}

---

### NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig <a name="NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkfirewallloggingconfiguration"

&networkfirewallloggingconfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig {
	LogDestination: *map[string]*string,
	LogDestinationType: *string,
	LogType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig.property.logDestination">LogDestination</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration#log_destination NetworkfirewallLoggingConfiguration#log_destination}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig.property.logType">LogType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration#log_type NetworkfirewallLoggingConfiguration#log_type}. |

---

##### `LogDestination`<sup>Required</sup> <a name="LogDestination" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig.property.logDestination"></a>

```go
LogDestination *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration#log_destination NetworkfirewallLoggingConfiguration#log_destination}.

---

##### `LogDestinationType`<sup>Required</sup> <a name="LogDestinationType" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig.property.logDestinationType"></a>

```go
LogDestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}.

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration#log_type NetworkfirewallLoggingConfiguration#log_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList <a name="NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NewNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.get"></a>

```go
func Get(index *f64) NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference <a name="NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NewNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.logDestinationInput">LogDestinationInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.logDestinationTypeInput">LogDestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.logDestination">LogDestination</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogDestinationInput`<sup>Optional</sup> <a name="LogDestinationInput" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.logDestinationInput"></a>

```go
func LogDestinationInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LogDestinationTypeInput`<sup>Optional</sup> <a name="LogDestinationTypeInput" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.logDestinationTypeInput"></a>

```go
func LogDestinationTypeInput() *string
```

- *Type:* *string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `LogDestination`<sup>Required</sup> <a name="LogDestination" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.logDestination"></a>

```go
func LogDestination() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LogDestinationType`<sup>Required</sup> <a name="LogDestinationType" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.logDestinationType"></a>

```go
func LogDestinationType() *string
```

- *Type:* *string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference <a name="NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NewNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.putLogDestinationConfig">PutLogDestinationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogDestinationConfig` <a name="PutLogDestinationConfig" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.putLogDestinationConfig"></a>

```go
func PutLogDestinationConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.putLogDestinationConfig.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfig">LogDestinationConfig</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList">NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfigInput">LogDestinationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration">NetworkfirewallLoggingConfigurationLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogDestinationConfig`<sup>Required</sup> <a name="LogDestinationConfig" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfig"></a>

```go
func LogDestinationConfig() NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList">NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigList</a>

---

##### `LogDestinationConfigInput`<sup>Optional</sup> <a name="LogDestinationConfigInput" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfigInput"></a>

```go
func LogDestinationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkfirewallLoggingConfigurationLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration">NetworkfirewallLoggingConfigurationLoggingConfiguration</a>

---



