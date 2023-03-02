# `ecsCluster` Submodule <a name="`ecsCluster` Submodule" id="@cdktf/provider-aws.ecsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsCluster <a name="EcsCluster" id="@cdktf/provider-aws.ecsCluster.EcsCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster aws_ecs_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

ecscluster.NewEcsCluster(scope Construct, id *string, config EcsClusterConfig) EcsCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig">EcsClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecsCluster.EcsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig">EcsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.putDefaultCapacityProviderStrategy">PutDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.putServiceConnectDefaults">PutServiceConnectDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.putSetting">PutSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetCapacityProviders">ResetCapacityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetDefaultCapacityProviderStrategy">ResetDefaultCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetServiceConnectDefaults">ResetServiceConnectDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetSetting">ResetSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsCluster.EcsCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ecsCluster.EcsCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsCluster.EcsCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ecsCluster.EcsCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsCluster.EcsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ecsCluster.EcsCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ecsCluster.EcsCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putConfiguration"></a>

```go
func PutConfiguration(value EcsClusterConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a>

---

##### `PutDefaultCapacityProviderStrategy` <a name="PutDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putDefaultCapacityProviderStrategy"></a>

```go
func PutDefaultCapacityProviderStrategy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putDefaultCapacityProviderStrategy.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServiceConnectDefaults` <a name="PutServiceConnectDefaults" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putServiceConnectDefaults"></a>

```go
func PutServiceConnectDefaults(value EcsClusterServiceConnectDefaults)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putServiceConnectDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a>

---

##### `PutSetting` <a name="PutSetting" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putSetting"></a>

```go
func PutSetting(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsCluster.putSetting.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapacityProviders` <a name="ResetCapacityProviders" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetCapacityProviders"></a>

```go
func ResetCapacityProviders()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetDefaultCapacityProviderStrategy` <a name="ResetDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetDefaultCapacityProviderStrategy"></a>

```go
func ResetDefaultCapacityProviderStrategy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetServiceConnectDefaults` <a name="ResetServiceConnectDefaults" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetServiceConnectDefaults"></a>

```go
func ResetServiceConnectDefaults()
```

##### `ResetSetting` <a name="ResetSetting" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetSetting"></a>

```go
func ResetSetting()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ecsCluster.EcsCluster.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

ecscluster.EcsCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

ecscluster.EcsCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

ecscluster.EcsCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsCluster.EcsCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference">EcsClusterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.defaultCapacityProviderStrategy">DefaultCapacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList">EcsClusterDefaultCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.serviceConnectDefaults">ServiceConnectDefaults</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference">EcsClusterServiceConnectDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.setting">Setting</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList">EcsClusterSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.capacityProvidersInput">CapacityProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.defaultCapacityProviderStrategyInput">DefaultCapacityProviderStrategyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.serviceConnectDefaultsInput">ServiceConnectDefaultsInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.settingInput">SettingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.capacityProviders">CapacityProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.configuration"></a>

```go
func Configuration() EcsClusterConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference">EcsClusterConfigurationOutputReference</a>

---

##### `DefaultCapacityProviderStrategy`<sup>Required</sup> <a name="DefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.defaultCapacityProviderStrategy"></a>

```go
func DefaultCapacityProviderStrategy() EcsClusterDefaultCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList">EcsClusterDefaultCapacityProviderStrategyList</a>

---

##### `ServiceConnectDefaults`<sup>Required</sup> <a name="ServiceConnectDefaults" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.serviceConnectDefaults"></a>

```go
func ServiceConnectDefaults() EcsClusterServiceConnectDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference">EcsClusterServiceConnectDefaultsOutputReference</a>

---

##### `Setting`<sup>Required</sup> <a name="Setting" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.setting"></a>

```go
func Setting() EcsClusterSettingList
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList">EcsClusterSettingList</a>

---

##### `CapacityProvidersInput`<sup>Optional</sup> <a name="CapacityProvidersInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.capacityProvidersInput"></a>

```go
func CapacityProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.configurationInput"></a>

```go
func ConfigurationInput() EcsClusterConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a>

---

##### `DefaultCapacityProviderStrategyInput`<sup>Optional</sup> <a name="DefaultCapacityProviderStrategyInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.defaultCapacityProviderStrategyInput"></a>

```go
func DefaultCapacityProviderStrategyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceConnectDefaultsInput`<sup>Optional</sup> <a name="ServiceConnectDefaultsInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.serviceConnectDefaultsInput"></a>

```go
func ServiceConnectDefaultsInput() EcsClusterServiceConnectDefaults
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a>

---

##### `SettingInput`<sup>Optional</sup> <a name="SettingInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.settingInput"></a>

```go
func SettingInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CapacityProviders`<sup>Required</sup> <a name="CapacityProviders" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.capacityProviders"></a>

```go
func CapacityProviders() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ecsCluster.EcsCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsClusterConfig <a name="EcsClusterConfig" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

&ecscluster.EcsClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CapacityProviders: *[]*string,
	Configuration: github.com/cdktf/cdktf-provider-aws-go/aws.ecsCluster.EcsClusterConfiguration,
	DefaultCapacityProviderStrategy: interface{},
	Id: *string,
	ServiceConnectDefaults: github.com/cdktf/cdktf-provider-aws-go/aws.ecsCluster.EcsClusterServiceConnectDefaults,
	Setting: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#name EcsCluster#name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.capacityProviders">CapacityProviders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#capacity_providers EcsCluster#capacity_providers}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.defaultCapacityProviderStrategy">DefaultCapacityProviderStrategy</a></code> | <code>interface{}</code> | default_capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#id EcsCluster#id}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.serviceConnectDefaults">ServiceConnectDefaults</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a></code> | service_connect_defaults block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.setting">Setting</a></code> | <code>interface{}</code> | setting block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#tags EcsCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#tags_all EcsCluster#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#name EcsCluster#name}.

---

##### `CapacityProviders`<sup>Optional</sup> <a name="CapacityProviders" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.capacityProviders"></a>

```go
CapacityProviders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#capacity_providers EcsCluster#capacity_providers}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.configuration"></a>

```go
Configuration EcsClusterConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#configuration EcsCluster#configuration}

---

##### `DefaultCapacityProviderStrategy`<sup>Optional</sup> <a name="DefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.defaultCapacityProviderStrategy"></a>

```go
DefaultCapacityProviderStrategy interface{}
```

- *Type:* interface{}

default_capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#default_capacity_provider_strategy EcsCluster#default_capacity_provider_strategy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#id EcsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceConnectDefaults`<sup>Optional</sup> <a name="ServiceConnectDefaults" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.serviceConnectDefaults"></a>

```go
ServiceConnectDefaults EcsClusterServiceConnectDefaults
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a>

service_connect_defaults block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#service_connect_defaults EcsCluster#service_connect_defaults}

---

##### `Setting`<sup>Optional</sup> <a name="Setting" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.setting"></a>

```go
Setting interface{}
```

- *Type:* interface{}

setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#setting EcsCluster#setting}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#tags EcsCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#tags_all EcsCluster#tags_all}.

---

### EcsClusterConfiguration <a name="EcsClusterConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

&ecscluster.EcsClusterConfiguration {
	ExecuteCommandConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration.property.executeCommandConfiguration">ExecuteCommandConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a></code> | execute_command_configuration block. |

---

##### `ExecuteCommandConfiguration`<sup>Optional</sup> <a name="ExecuteCommandConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration.property.executeCommandConfiguration"></a>

```go
ExecuteCommandConfiguration EcsClusterConfigurationExecuteCommandConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a>

execute_command_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#execute_command_configuration EcsCluster#execute_command_configuration}

---

### EcsClusterConfigurationExecuteCommandConfiguration <a name="EcsClusterConfigurationExecuteCommandConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

&ecscluster.EcsClusterConfigurationExecuteCommandConfiguration {
	KmsKeyId: *string,
	LogConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration,
	Logging: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#kms_key_id EcsCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.logging">Logging</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#logging EcsCluster#logging}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#kms_key_id EcsCluster#kms_key_id}.

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.logConfiguration"></a>

```go
LogConfiguration EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#log_configuration EcsCluster#log_configuration}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration.property.logging"></a>

```go
Logging *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#logging EcsCluster#logging}.

---

### EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration <a name="EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

&ecscluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration {
	CloudWatchEncryptionEnabled: interface{},
	CloudWatchLogGroupName: *string,
	S3BucketEncryptionEnabled: interface{},
	S3BucketName: *string,
	S3KeyPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.cloudWatchEncryptionEnabled">CloudWatchEncryptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#cloud_watch_encryption_enabled EcsCluster#cloud_watch_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.cloudWatchLogGroupName">CloudWatchLogGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#cloud_watch_log_group_name EcsCluster#cloud_watch_log_group_name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3BucketEncryptionEnabled">S3BucketEncryptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#s3_bucket_encryption_enabled EcsCluster#s3_bucket_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#s3_bucket_name EcsCluster#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#s3_key_prefix EcsCluster#s3_key_prefix}. |

---

##### `CloudWatchEncryptionEnabled`<sup>Optional</sup> <a name="CloudWatchEncryptionEnabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.cloudWatchEncryptionEnabled"></a>

```go
CloudWatchEncryptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#cloud_watch_encryption_enabled EcsCluster#cloud_watch_encryption_enabled}.

---

##### `CloudWatchLogGroupName`<sup>Optional</sup> <a name="CloudWatchLogGroupName" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.cloudWatchLogGroupName"></a>

```go
CloudWatchLogGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#cloud_watch_log_group_name EcsCluster#cloud_watch_log_group_name}.

---

##### `S3BucketEncryptionEnabled`<sup>Optional</sup> <a name="S3BucketEncryptionEnabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3BucketEncryptionEnabled"></a>

```go
S3BucketEncryptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#s3_bucket_encryption_enabled EcsCluster#s3_bucket_encryption_enabled}.

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#s3_bucket_name EcsCluster#s3_bucket_name}.

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration.property.s3KeyPrefix"></a>

```go
S3KeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#s3_key_prefix EcsCluster#s3_key_prefix}.

---

### EcsClusterDefaultCapacityProviderStrategy <a name="EcsClusterDefaultCapacityProviderStrategy" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

&ecscluster.EcsClusterDefaultCapacityProviderStrategy {
	CapacityProvider: *string,
	Base: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.property.capacityProvider">CapacityProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#capacity_provider EcsCluster#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.property.base">Base</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#base EcsCluster#base}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#weight EcsCluster#weight}. |

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.property.capacityProvider"></a>

```go
CapacityProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#capacity_provider EcsCluster#capacity_provider}.

---

##### `Base`<sup>Optional</sup> <a name="Base" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.property.base"></a>

```go
Base *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#base EcsCluster#base}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategy.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#weight EcsCluster#weight}.

---

### EcsClusterServiceConnectDefaults <a name="EcsClusterServiceConnectDefaults" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

&ecscluster.EcsClusterServiceConnectDefaults {
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#namespace EcsCluster#namespace}. |

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#namespace EcsCluster#namespace}.

---

### EcsClusterSetting <a name="EcsClusterSetting" id="@cdktf/provider-aws.ecsCluster.EcsClusterSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsCluster.EcsClusterSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

&ecscluster.EcsClusterSetting {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#name EcsCluster#name}. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSetting.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#value EcsCluster#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ecsCluster.EcsClusterSetting.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#name EcsCluster#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsCluster.EcsClusterSetting.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster#value EcsCluster#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference <a name="EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

ecscluster.NewEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetCloudWatchEncryptionEnabled">ResetCloudWatchEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetCloudWatchLogGroupName">ResetCloudWatchLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3BucketEncryptionEnabled">ResetS3BucketEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudWatchEncryptionEnabled` <a name="ResetCloudWatchEncryptionEnabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetCloudWatchEncryptionEnabled"></a>

```go
func ResetCloudWatchEncryptionEnabled()
```

##### `ResetCloudWatchLogGroupName` <a name="ResetCloudWatchLogGroupName" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetCloudWatchLogGroupName"></a>

```go
func ResetCloudWatchLogGroupName()
```

##### `ResetS3BucketEncryptionEnabled` <a name="ResetS3BucketEncryptionEnabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3BucketEncryptionEnabled"></a>

```go
func ResetS3BucketEncryptionEnabled()
```

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3BucketName"></a>

```go
func ResetS3BucketName()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.resetS3KeyPrefix"></a>

```go
func ResetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchEncryptionEnabledInput">CloudWatchEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchLogGroupNameInput">CloudWatchLogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketEncryptionEnabledInput">S3BucketEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchEncryptionEnabled">CloudWatchEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchLogGroupName">CloudWatchLogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketEncryptionEnabled">S3BucketEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudWatchEncryptionEnabledInput`<sup>Optional</sup> <a name="CloudWatchEncryptionEnabledInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchEncryptionEnabledInput"></a>

```go
func CloudWatchEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CloudWatchLogGroupNameInput`<sup>Optional</sup> <a name="CloudWatchLogGroupNameInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchLogGroupNameInput"></a>

```go
func CloudWatchLogGroupNameInput() *string
```

- *Type:* *string

---

##### `S3BucketEncryptionEnabledInput`<sup>Optional</sup> <a name="S3BucketEncryptionEnabledInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketEncryptionEnabledInput"></a>

```go
func S3BucketEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3KeyPrefixInput"></a>

```go
func S3KeyPrefixInput() *string
```

- *Type:* *string

---

##### `CloudWatchEncryptionEnabled`<sup>Required</sup> <a name="CloudWatchEncryptionEnabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchEncryptionEnabled"></a>

```go
func CloudWatchEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `CloudWatchLogGroupName`<sup>Required</sup> <a name="CloudWatchLogGroupName" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.cloudWatchLogGroupName"></a>

```go
func CloudWatchLogGroupName() *string
```

- *Type:* *string

---

##### `S3BucketEncryptionEnabled`<sup>Required</sup> <a name="S3BucketEncryptionEnabled" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketEncryptionEnabled"></a>

```go
func S3BucketEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.s3KeyPrefix"></a>

```go
func S3KeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a>

---


### EcsClusterConfigurationExecuteCommandConfigurationOutputReference <a name="EcsClusterConfigurationExecuteCommandConfigurationOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

ecscluster.NewEcsClusterConfigurationExecuteCommandConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsClusterConfigurationExecuteCommandConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetLogging">ResetLogging</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration"></a>

```go
func PutLogConfiguration(value EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a>

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetLogConfiguration"></a>

```go
func ResetLogConfiguration()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.resetLogging"></a>

```go
func ResetLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference">EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logConfigurationInput">LogConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.loggingInput">LoggingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logging">Logging</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logConfiguration"></a>

```go
func LogConfiguration() EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference">EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logConfigurationInput"></a>

```go
func LogConfigurationInput() EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration">EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration</a>

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.loggingInput"></a>

```go
func LoggingInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.logging"></a>

```go
func Logging() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsClusterConfigurationExecuteCommandConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a>

---


### EcsClusterConfigurationOutputReference <a name="EcsClusterConfigurationOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

ecscluster.NewEcsClusterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsClusterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putExecuteCommandConfiguration">PutExecuteCommandConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resetExecuteCommandConfiguration">ResetExecuteCommandConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExecuteCommandConfiguration` <a name="PutExecuteCommandConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putExecuteCommandConfiguration"></a>

```go
func PutExecuteCommandConfiguration(value EcsClusterConfigurationExecuteCommandConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.putExecuteCommandConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a>

---

##### `ResetExecuteCommandConfiguration` <a name="ResetExecuteCommandConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.resetExecuteCommandConfiguration"></a>

```go
func ResetExecuteCommandConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.executeCommandConfiguration">ExecuteCommandConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference">EcsClusterConfigurationExecuteCommandConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.executeCommandConfigurationInput">ExecuteCommandConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecuteCommandConfiguration`<sup>Required</sup> <a name="ExecuteCommandConfiguration" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.executeCommandConfiguration"></a>

```go
func ExecuteCommandConfiguration() EcsClusterConfigurationExecuteCommandConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfigurationOutputReference">EcsClusterConfigurationExecuteCommandConfigurationOutputReference</a>

---

##### `ExecuteCommandConfigurationInput`<sup>Optional</sup> <a name="ExecuteCommandConfigurationInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.executeCommandConfigurationInput"></a>

```go
func ExecuteCommandConfigurationInput() EcsClusterConfigurationExecuteCommandConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationExecuteCommandConfiguration">EcsClusterConfigurationExecuteCommandConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsClusterConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterConfiguration">EcsClusterConfiguration</a>

---


### EcsClusterDefaultCapacityProviderStrategyList <a name="EcsClusterDefaultCapacityProviderStrategyList" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

ecscluster.NewEcsClusterDefaultCapacityProviderStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsClusterDefaultCapacityProviderStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.get"></a>

```go
func Get(index *f64) EcsClusterDefaultCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsClusterDefaultCapacityProviderStrategyOutputReference <a name="EcsClusterDefaultCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

ecscluster.NewEcsClusterDefaultCapacityProviderStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsClusterDefaultCapacityProviderStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resetBase">ResetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBase` <a name="ResetBase" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resetBase"></a>

```go
func ResetBase()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.baseInput">BaseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput">CapacityProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseInput`<sup>Optional</sup> <a name="BaseInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.baseInput"></a>

```go
func BaseInput() *f64
```

- *Type:* *f64

---

##### `CapacityProviderInput`<sup>Optional</sup> <a name="CapacityProviderInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```go
func CapacityProviderInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.base"></a>

```go
func Base() *f64
```

- *Type:* *f64

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```go
func CapacityProvider() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterDefaultCapacityProviderStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsClusterServiceConnectDefaultsOutputReference <a name="EcsClusterServiceConnectDefaultsOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

ecscluster.NewEcsClusterServiceConnectDefaultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcsClusterServiceConnectDefaultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaultsOutputReference.property.internalValue"></a>

```go
func InternalValue() EcsClusterServiceConnectDefaults
```

- *Type:* <a href="#@cdktf/provider-aws.ecsCluster.EcsClusterServiceConnectDefaults">EcsClusterServiceConnectDefaults</a>

---


### EcsClusterSettingList <a name="EcsClusterSettingList" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

ecscluster.NewEcsClusterSettingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcsClusterSettingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.get"></a>

```go
func Get(index *f64) EcsClusterSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcsClusterSettingOutputReference <a name="EcsClusterSettingOutputReference" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecscluster"

ecscluster.NewEcsClusterSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcsClusterSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecsCluster.EcsClusterSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



