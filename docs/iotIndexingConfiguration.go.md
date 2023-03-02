# `iotIndexingConfiguration` Submodule <a name="`iotIndexingConfiguration` Submodule" id="@cdktf/provider-aws.iotIndexingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotIndexingConfiguration <a name="IotIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration aws_iot_indexing_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.NewIotIndexingConfiguration(scope Construct, id *string, config IotIndexingConfigurationConfig) IotIndexingConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig">IotIndexingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig">IotIndexingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingGroupIndexingConfiguration">PutThingGroupIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingIndexingConfiguration">PutThingIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetThingGroupIndexingConfiguration">ResetThingGroupIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetThingIndexingConfiguration">ResetThingIndexingConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutThingGroupIndexingConfiguration` <a name="PutThingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingGroupIndexingConfiguration"></a>

```go
func PutThingGroupIndexingConfiguration(value IotIndexingConfigurationThingGroupIndexingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingGroupIndexingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

---

##### `PutThingIndexingConfiguration` <a name="PutThingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingIndexingConfiguration"></a>

```go
func PutThingIndexingConfiguration(value IotIndexingConfigurationThingIndexingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.putThingIndexingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetThingGroupIndexingConfiguration` <a name="ResetThingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetThingGroupIndexingConfiguration"></a>

```go
func ResetThingGroupIndexingConfiguration()
```

##### `ResetThingIndexingConfiguration` <a name="ResetThingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.resetThingIndexingConfiguration"></a>

```go
func ResetThingIndexingConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.IotIndexingConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.IotIndexingConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.IotIndexingConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingGroupIndexingConfiguration">ThingGroupIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference">IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingIndexingConfiguration">ThingIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference">IotIndexingConfigurationThingIndexingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingGroupIndexingConfigurationInput">ThingGroupIndexingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingIndexingConfigurationInput">ThingIndexingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ThingGroupIndexingConfiguration`<sup>Required</sup> <a name="ThingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingGroupIndexingConfiguration"></a>

```go
func ThingGroupIndexingConfiguration() IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference">IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference</a>

---

##### `ThingIndexingConfiguration`<sup>Required</sup> <a name="ThingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingIndexingConfiguration"></a>

```go
func ThingIndexingConfiguration() IotIndexingConfigurationThingIndexingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference">IotIndexingConfigurationThingIndexingConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ThingGroupIndexingConfigurationInput`<sup>Optional</sup> <a name="ThingGroupIndexingConfigurationInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingGroupIndexingConfigurationInput"></a>

```go
func ThingGroupIndexingConfigurationInput() IotIndexingConfigurationThingGroupIndexingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

---

##### `ThingIndexingConfigurationInput`<sup>Optional</sup> <a name="ThingIndexingConfigurationInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.thingIndexingConfigurationInput"></a>

```go
func ThingIndexingConfigurationInput() IotIndexingConfigurationThingIndexingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotIndexingConfigurationConfig <a name="IotIndexingConfigurationConfig" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

&iotindexingconfiguration.IotIndexingConfigurationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	ThingGroupIndexingConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration,
	ThingIndexingConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#id IotIndexingConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.thingGroupIndexingConfiguration">ThingGroupIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a></code> | thing_group_indexing_configuration block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.thingIndexingConfiguration">ThingIndexingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a></code> | thing_indexing_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#id IotIndexingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ThingGroupIndexingConfiguration`<sup>Optional</sup> <a name="ThingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.thingGroupIndexingConfiguration"></a>

```go
ThingGroupIndexingConfiguration IotIndexingConfigurationThingGroupIndexingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

thing_group_indexing_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_group_indexing_configuration IotIndexingConfiguration#thing_group_indexing_configuration}

---

##### `ThingIndexingConfiguration`<sup>Optional</sup> <a name="ThingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationConfig.property.thingIndexingConfiguration"></a>

```go
ThingIndexingConfiguration IotIndexingConfigurationThingIndexingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

thing_indexing_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_indexing_configuration IotIndexingConfiguration#thing_indexing_configuration}

---

### IotIndexingConfigurationThingGroupIndexingConfiguration <a name="IotIndexingConfigurationThingGroupIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

&iotindexingconfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration {
	ThingGroupIndexingMode: *string,
	CustomField: interface{},
	ManagedField: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.thingGroupIndexingMode">ThingGroupIndexingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_group_indexing_mode IotIndexingConfiguration#thing_group_indexing_mode}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.customField">CustomField</a></code> | <code>interface{}</code> | custom_field block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.managedField">ManagedField</a></code> | <code>interface{}</code> | managed_field block. |

---

##### `ThingGroupIndexingMode`<sup>Required</sup> <a name="ThingGroupIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.thingGroupIndexingMode"></a>

```go
ThingGroupIndexingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_group_indexing_mode IotIndexingConfiguration#thing_group_indexing_mode}.

---

##### `CustomField`<sup>Optional</sup> <a name="CustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.customField"></a>

```go
CustomField interface{}
```

- *Type:* interface{}

custom_field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#custom_field IotIndexingConfiguration#custom_field}

---

##### `ManagedField`<sup>Optional</sup> <a name="ManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration.property.managedField"></a>

```go
ManagedField interface{}
```

- *Type:* interface{}

managed_field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#managed_field IotIndexingConfiguration#managed_field}

---

### IotIndexingConfigurationThingGroupIndexingConfigurationCustomField <a name="IotIndexingConfigurationThingGroupIndexingConfigurationCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

&iotindexingconfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomField.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}.

---

### IotIndexingConfigurationThingGroupIndexingConfigurationManagedField <a name="IotIndexingConfigurationThingGroupIndexingConfigurationManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

&iotindexingconfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedField.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}.

---

### IotIndexingConfigurationThingIndexingConfiguration <a name="IotIndexingConfigurationThingIndexingConfiguration" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

&iotindexingconfiguration.IotIndexingConfigurationThingIndexingConfiguration {
	ThingIndexingMode: *string,
	CustomField: interface{},
	DeviceDefenderIndexingMode: *string,
	ManagedField: interface{},
	NamedShadowIndexingMode: *string,
	ThingConnectivityIndexingMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.thingIndexingMode">ThingIndexingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_indexing_mode IotIndexingConfiguration#thing_indexing_mode}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.customField">CustomField</a></code> | <code>interface{}</code> | custom_field block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.deviceDefenderIndexingMode">DeviceDefenderIndexingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#device_defender_indexing_mode IotIndexingConfiguration#device_defender_indexing_mode}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.managedField">ManagedField</a></code> | <code>interface{}</code> | managed_field block. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.namedShadowIndexingMode">NamedShadowIndexingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#named_shadow_indexing_mode IotIndexingConfiguration#named_shadow_indexing_mode}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.thingConnectivityIndexingMode">ThingConnectivityIndexingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_connectivity_indexing_mode IotIndexingConfiguration#thing_connectivity_indexing_mode}. |

---

##### `ThingIndexingMode`<sup>Required</sup> <a name="ThingIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.thingIndexingMode"></a>

```go
ThingIndexingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_indexing_mode IotIndexingConfiguration#thing_indexing_mode}.

---

##### `CustomField`<sup>Optional</sup> <a name="CustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.customField"></a>

```go
CustomField interface{}
```

- *Type:* interface{}

custom_field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#custom_field IotIndexingConfiguration#custom_field}

---

##### `DeviceDefenderIndexingMode`<sup>Optional</sup> <a name="DeviceDefenderIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.deviceDefenderIndexingMode"></a>

```go
DeviceDefenderIndexingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#device_defender_indexing_mode IotIndexingConfiguration#device_defender_indexing_mode}.

---

##### `ManagedField`<sup>Optional</sup> <a name="ManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.managedField"></a>

```go
ManagedField interface{}
```

- *Type:* interface{}

managed_field block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#managed_field IotIndexingConfiguration#managed_field}

---

##### `NamedShadowIndexingMode`<sup>Optional</sup> <a name="NamedShadowIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.namedShadowIndexingMode"></a>

```go
NamedShadowIndexingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#named_shadow_indexing_mode IotIndexingConfiguration#named_shadow_indexing_mode}.

---

##### `ThingConnectivityIndexingMode`<sup>Optional</sup> <a name="ThingConnectivityIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration.property.thingConnectivityIndexingMode"></a>

```go
ThingConnectivityIndexingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#thing_connectivity_indexing_mode IotIndexingConfiguration#thing_connectivity_indexing_mode}.

---

### IotIndexingConfigurationThingIndexingConfigurationCustomField <a name="IotIndexingConfigurationThingIndexingConfigurationCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

&iotindexingconfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomField.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}.

---

### IotIndexingConfigurationThingIndexingConfigurationManagedField <a name="IotIndexingConfigurationThingIndexingConfigurationManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

&iotindexingconfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#name IotIndexingConfiguration#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedField.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_indexing_configuration#type IotIndexingConfiguration#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList <a name="IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.NewIotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.get"></a>

```go
func Get(index *f64) IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference <a name="IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.NewIotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList <a name="IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.NewIotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.get"></a>

```go
func Get(index *f64) IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference <a name="IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.NewIotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference <a name="IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.NewIotIndexingConfigurationThingGroupIndexingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putCustomField">PutCustomField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putManagedField">PutManagedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resetCustomField">ResetCustomField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resetManagedField">ResetManagedField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomField` <a name="PutCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putCustomField"></a>

```go
func PutCustomField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putCustomField.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagedField` <a name="PutManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putManagedField"></a>

```go
func PutManagedField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.putManagedField.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomField` <a name="ResetCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resetCustomField"></a>

```go
func ResetCustomField()
```

##### `ResetManagedField` <a name="ResetManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.resetManagedField"></a>

```go
func ResetManagedField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.customField">CustomField</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList">IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.managedField">ManagedField</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList">IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.customFieldInput">CustomFieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.managedFieldInput">ManagedFieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.thingGroupIndexingModeInput">ThingGroupIndexingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.thingGroupIndexingMode">ThingGroupIndexingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomField`<sup>Required</sup> <a name="CustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.customField"></a>

```go
func CustomField() IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList">IotIndexingConfigurationThingGroupIndexingConfigurationCustomFieldList</a>

---

##### `ManagedField`<sup>Required</sup> <a name="ManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.managedField"></a>

```go
func ManagedField() IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList">IotIndexingConfigurationThingGroupIndexingConfigurationManagedFieldList</a>

---

##### `CustomFieldInput`<sup>Optional</sup> <a name="CustomFieldInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.customFieldInput"></a>

```go
func CustomFieldInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedFieldInput`<sup>Optional</sup> <a name="ManagedFieldInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.managedFieldInput"></a>

```go
func ManagedFieldInput() interface{}
```

- *Type:* interface{}

---

##### `ThingGroupIndexingModeInput`<sup>Optional</sup> <a name="ThingGroupIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.thingGroupIndexingModeInput"></a>

```go
func ThingGroupIndexingModeInput() *string
```

- *Type:* *string

---

##### `ThingGroupIndexingMode`<sup>Required</sup> <a name="ThingGroupIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.thingGroupIndexingMode"></a>

```go
func ThingGroupIndexingMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() IotIndexingConfigurationThingGroupIndexingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingGroupIndexingConfiguration">IotIndexingConfigurationThingGroupIndexingConfiguration</a>

---


### IotIndexingConfigurationThingIndexingConfigurationCustomFieldList <a name="IotIndexingConfigurationThingIndexingConfigurationCustomFieldList" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.NewIotIndexingConfigurationThingIndexingConfigurationCustomFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotIndexingConfigurationThingIndexingConfigurationCustomFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.get"></a>

```go
func Get(index *f64) IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference <a name="IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.NewIotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotIndexingConfigurationThingIndexingConfigurationManagedFieldList <a name="IotIndexingConfigurationThingIndexingConfigurationManagedFieldList" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.NewIotIndexingConfigurationThingIndexingConfigurationManagedFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotIndexingConfigurationThingIndexingConfigurationManagedFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.get"></a>

```go
func Get(index *f64) IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference <a name="IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.NewIotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotIndexingConfigurationThingIndexingConfigurationOutputReference <a name="IotIndexingConfigurationThingIndexingConfigurationOutputReference" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/iotindexingconfiguration"

iotindexingconfiguration.NewIotIndexingConfigurationThingIndexingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotIndexingConfigurationThingIndexingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putCustomField">PutCustomField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putManagedField">PutManagedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetCustomField">ResetCustomField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetDeviceDefenderIndexingMode">ResetDeviceDefenderIndexingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetManagedField">ResetManagedField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetNamedShadowIndexingMode">ResetNamedShadowIndexingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetThingConnectivityIndexingMode">ResetThingConnectivityIndexingMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomField` <a name="PutCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putCustomField"></a>

```go
func PutCustomField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putCustomField.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagedField` <a name="PutManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putManagedField"></a>

```go
func PutManagedField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.putManagedField.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomField` <a name="ResetCustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetCustomField"></a>

```go
func ResetCustomField()
```

##### `ResetDeviceDefenderIndexingMode` <a name="ResetDeviceDefenderIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetDeviceDefenderIndexingMode"></a>

```go
func ResetDeviceDefenderIndexingMode()
```

##### `ResetManagedField` <a name="ResetManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetManagedField"></a>

```go
func ResetManagedField()
```

##### `ResetNamedShadowIndexingMode` <a name="ResetNamedShadowIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetNamedShadowIndexingMode"></a>

```go
func ResetNamedShadowIndexingMode()
```

##### `ResetThingConnectivityIndexingMode` <a name="ResetThingConnectivityIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.resetThingConnectivityIndexingMode"></a>

```go
func ResetThingConnectivityIndexingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.customField">CustomField</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList">IotIndexingConfigurationThingIndexingConfigurationCustomFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.managedField">ManagedField</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList">IotIndexingConfigurationThingIndexingConfigurationManagedFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.customFieldInput">CustomFieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.deviceDefenderIndexingModeInput">DeviceDefenderIndexingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.managedFieldInput">ManagedFieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.namedShadowIndexingModeInput">NamedShadowIndexingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingConnectivityIndexingModeInput">ThingConnectivityIndexingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingIndexingModeInput">ThingIndexingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.deviceDefenderIndexingMode">DeviceDefenderIndexingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.namedShadowIndexingMode">NamedShadowIndexingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingConnectivityIndexingMode">ThingConnectivityIndexingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingIndexingMode">ThingIndexingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomField`<sup>Required</sup> <a name="CustomField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.customField"></a>

```go
func CustomField() IotIndexingConfigurationThingIndexingConfigurationCustomFieldList
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationCustomFieldList">IotIndexingConfigurationThingIndexingConfigurationCustomFieldList</a>

---

##### `ManagedField`<sup>Required</sup> <a name="ManagedField" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.managedField"></a>

```go
func ManagedField() IotIndexingConfigurationThingIndexingConfigurationManagedFieldList
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationManagedFieldList">IotIndexingConfigurationThingIndexingConfigurationManagedFieldList</a>

---

##### `CustomFieldInput`<sup>Optional</sup> <a name="CustomFieldInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.customFieldInput"></a>

```go
func CustomFieldInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceDefenderIndexingModeInput`<sup>Optional</sup> <a name="DeviceDefenderIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.deviceDefenderIndexingModeInput"></a>

```go
func DeviceDefenderIndexingModeInput() *string
```

- *Type:* *string

---

##### `ManagedFieldInput`<sup>Optional</sup> <a name="ManagedFieldInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.managedFieldInput"></a>

```go
func ManagedFieldInput() interface{}
```

- *Type:* interface{}

---

##### `NamedShadowIndexingModeInput`<sup>Optional</sup> <a name="NamedShadowIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.namedShadowIndexingModeInput"></a>

```go
func NamedShadowIndexingModeInput() *string
```

- *Type:* *string

---

##### `ThingConnectivityIndexingModeInput`<sup>Optional</sup> <a name="ThingConnectivityIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingConnectivityIndexingModeInput"></a>

```go
func ThingConnectivityIndexingModeInput() *string
```

- *Type:* *string

---

##### `ThingIndexingModeInput`<sup>Optional</sup> <a name="ThingIndexingModeInput" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingIndexingModeInput"></a>

```go
func ThingIndexingModeInput() *string
```

- *Type:* *string

---

##### `DeviceDefenderIndexingMode`<sup>Required</sup> <a name="DeviceDefenderIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.deviceDefenderIndexingMode"></a>

```go
func DeviceDefenderIndexingMode() *string
```

- *Type:* *string

---

##### `NamedShadowIndexingMode`<sup>Required</sup> <a name="NamedShadowIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.namedShadowIndexingMode"></a>

```go
func NamedShadowIndexingMode() *string
```

- *Type:* *string

---

##### `ThingConnectivityIndexingMode`<sup>Required</sup> <a name="ThingConnectivityIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingConnectivityIndexingMode"></a>

```go
func ThingConnectivityIndexingMode() *string
```

- *Type:* *string

---

##### `ThingIndexingMode`<sup>Required</sup> <a name="ThingIndexingMode" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.thingIndexingMode"></a>

```go
func ThingIndexingMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() IotIndexingConfigurationThingIndexingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.iotIndexingConfiguration.IotIndexingConfigurationThingIndexingConfiguration">IotIndexingConfigurationThingIndexingConfiguration</a>

---



