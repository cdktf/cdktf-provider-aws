# `guarddutyOrganizationConfiguration` Submodule <a name="`guarddutyOrganizationConfiguration` Submodule" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyOrganizationConfiguration <a name="GuarddutyOrganizationConfiguration" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration aws_guardduty_organization_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

guarddutyorganizationconfiguration.NewGuarddutyOrganizationConfiguration(scope Construct, id *string, config GuarddutyOrganizationConfigurationConfig) GuarddutyOrganizationConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig">GuarddutyOrganizationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig">GuarddutyOrganizationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.putDatasources">PutDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetDatasources">ResetDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDatasources` <a name="PutDatasources" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.putDatasources"></a>

```go
func PutDatasources(value GuarddutyOrganizationConfigurationDatasources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.putDatasources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a>

---

##### `ResetDatasources` <a name="ResetDatasources" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetDatasources"></a>

```go
func ResetDatasources()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

guarddutyorganizationconfiguration.GuarddutyOrganizationConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

guarddutyorganizationconfiguration.GuarddutyOrganizationConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

guarddutyorganizationconfiguration.GuarddutyOrganizationConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.datasources">Datasources</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference">GuarddutyOrganizationConfigurationDatasourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.autoEnableInput">AutoEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.datasourcesInput">DatasourcesInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.detectorIdInput">DetectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.autoEnable">AutoEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.detectorId">DetectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Datasources`<sup>Required</sup> <a name="Datasources" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.datasources"></a>

```go
func Datasources() GuarddutyOrganizationConfigurationDatasourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference">GuarddutyOrganizationConfigurationDatasourcesOutputReference</a>

---

##### `AutoEnableInput`<sup>Optional</sup> <a name="AutoEnableInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.autoEnableInput"></a>

```go
func AutoEnableInput() interface{}
```

- *Type:* interface{}

---

##### `DatasourcesInput`<sup>Optional</sup> <a name="DatasourcesInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.datasourcesInput"></a>

```go
func DatasourcesInput() GuarddutyOrganizationConfigurationDatasources
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a>

---

##### `DetectorIdInput`<sup>Optional</sup> <a name="DetectorIdInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.detectorIdInput"></a>

```go
func DetectorIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AutoEnable`<sup>Required</sup> <a name="AutoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.autoEnable"></a>

```go
func AutoEnable() interface{}
```

- *Type:* interface{}

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.detectorId"></a>

```go
func DetectorId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyOrganizationConfigurationConfig <a name="GuarddutyOrganizationConfigurationConfig" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

&guarddutyorganizationconfiguration.GuarddutyOrganizationConfigurationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutoEnable: interface{},
	DetectorId: *string,
	Datasources: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.autoEnable">AutoEnable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.detectorId">DetectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#detector_id GuarddutyOrganizationConfiguration#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.datasources">Datasources</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a></code> | datasources block. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#id GuarddutyOrganizationConfiguration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoEnable`<sup>Required</sup> <a name="AutoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.autoEnable"></a>

```go
AutoEnable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}.

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.detectorId"></a>

```go
DetectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#detector_id GuarddutyOrganizationConfiguration#detector_id}.

---

##### `Datasources`<sup>Optional</sup> <a name="Datasources" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.datasources"></a>

```go
Datasources GuarddutyOrganizationConfigurationDatasources
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a>

datasources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#datasources GuarddutyOrganizationConfiguration#datasources}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#id GuarddutyOrganizationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GuarddutyOrganizationConfigurationDatasources <a name="GuarddutyOrganizationConfigurationDatasources" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

&guarddutyorganizationconfiguration.GuarddutyOrganizationConfigurationDatasources {
	Kubernetes: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes,
	MalwareProtection: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection,
	S3Logs: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.malwareProtection">MalwareProtection</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a></code> | malware_protection block. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a></code> | s3_logs block. |

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.kubernetes"></a>

```go
Kubernetes GuarddutyOrganizationConfigurationDatasourcesKubernetes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#kubernetes GuarddutyOrganizationConfiguration#kubernetes}

---

##### `MalwareProtection`<sup>Optional</sup> <a name="MalwareProtection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.malwareProtection"></a>

```go
MalwareProtection GuarddutyOrganizationConfigurationDatasourcesMalwareProtection
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a>

malware_protection block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#malware_protection GuarddutyOrganizationConfiguration#malware_protection}

---

##### `S3Logs`<sup>Optional</sup> <a name="S3Logs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.s3Logs"></a>

```go
S3Logs GuarddutyOrganizationConfigurationDatasourcesS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#s3_logs GuarddutyOrganizationConfiguration#s3_logs}

---

### GuarddutyOrganizationConfigurationDatasourcesKubernetes <a name="GuarddutyOrganizationConfigurationDatasourcesKubernetes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

&guarddutyorganizationconfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes {
	AuditLogs: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes.property.auditLogs">AuditLogs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a></code> | audit_logs block. |

---

##### `AuditLogs`<sup>Required</sup> <a name="AuditLogs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes.property.auditLogs"></a>

```go
AuditLogs GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a>

audit_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#audit_logs GuarddutyOrganizationConfiguration#audit_logs}

---

### GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs <a name="GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

&guarddutyorganizationconfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs {
	Enable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs.property.enable">Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#enable GuarddutyOrganizationConfiguration#enable}. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#enable GuarddutyOrganizationConfiguration#enable}.

---

### GuarddutyOrganizationConfigurationDatasourcesMalwareProtection <a name="GuarddutyOrganizationConfigurationDatasourcesMalwareProtection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

&guarddutyorganizationconfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection {
	ScanEc2InstanceWithFindings: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection.property.scanEc2InstanceWithFindings">ScanEc2InstanceWithFindings</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | scan_ec2_instance_with_findings block. |

---

##### `ScanEc2InstanceWithFindings`<sup>Required</sup> <a name="ScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection.property.scanEc2InstanceWithFindings"></a>

```go
ScanEc2InstanceWithFindings GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

scan_ec2_instance_with_findings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#scan_ec2_instance_with_findings GuarddutyOrganizationConfiguration#scan_ec2_instance_with_findings}

---

### GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings <a name="GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

&guarddutyorganizationconfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings {
	EbsVolumes: github.com/cdktf/cdktf-provider-aws-go/aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes">EbsVolumes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | ebs_volumes block. |

---

##### `EbsVolumes`<sup>Required</sup> <a name="EbsVolumes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes"></a>

```go
EbsVolumes GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

ebs_volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#ebs_volumes GuarddutyOrganizationConfiguration#ebs_volumes}

---

### GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes <a name="GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

&guarddutyorganizationconfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes {
	AutoEnable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.property.autoEnable">AutoEnable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}. |

---

##### `AutoEnable`<sup>Required</sup> <a name="AutoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.property.autoEnable"></a>

```go
AutoEnable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}.

---

### GuarddutyOrganizationConfigurationDatasourcesS3Logs <a name="GuarddutyOrganizationConfigurationDatasourcesS3Logs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

&guarddutyorganizationconfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs {
	AutoEnable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs.property.autoEnable">AutoEnable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}. |

---

##### `AutoEnable`<sup>Required</sup> <a name="AutoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs.property.autoEnable"></a>

```go
AutoEnable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

guarddutyorganizationconfiguration.NewGuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a>

---


### GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

guarddutyorganizationconfiguration.NewGuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.putAuditLogs">PutAuditLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuditLogs` <a name="PutAuditLogs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.putAuditLogs"></a>

```go
func PutAuditLogs(value GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.putAuditLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.auditLogs">AuditLogs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.auditLogsInput">AuditLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditLogs`<sup>Required</sup> <a name="AuditLogs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.auditLogs"></a>

```go
func AuditLogs() GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference</a>

---

##### `AuditLogsInput`<sup>Optional</sup> <a name="AuditLogsInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.auditLogsInput"></a>

```go
func AuditLogsInput() GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyOrganizationConfigurationDatasourcesKubernetes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a>

---


### GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

guarddutyorganizationconfiguration.NewGuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings">PutScanEc2InstanceWithFindings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScanEc2InstanceWithFindings` <a name="PutScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings"></a>

```go
func PutScanEc2InstanceWithFindings(value GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings">ScanEc2InstanceWithFindings</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput">ScanEc2InstanceWithFindingsInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScanEc2InstanceWithFindings`<sup>Required</sup> <a name="ScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings"></a>

```go
func ScanEc2InstanceWithFindings() GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a>

---

##### `ScanEc2InstanceWithFindingsInput`<sup>Optional</sup> <a name="ScanEc2InstanceWithFindingsInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput"></a>

```go
func ScanEc2InstanceWithFindingsInput() GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyOrganizationConfigurationDatasourcesMalwareProtection
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a>

---


### GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

guarddutyorganizationconfiguration.NewGuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.autoEnableInput">AutoEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.autoEnable">AutoEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoEnableInput`<sup>Optional</sup> <a name="AutoEnableInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.autoEnableInput"></a>

```go
func AutoEnableInput() interface{}
```

- *Type:* interface{}

---

##### `AutoEnable`<sup>Required</sup> <a name="AutoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.autoEnable"></a>

```go
func AutoEnable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---


### GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

guarddutyorganizationconfiguration.NewGuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes">PutEbsVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsVolumes` <a name="PutEbsVolumes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes"></a>

```go
func PutEbsVolumes(value GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes">EbsVolumes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput">EbsVolumesInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsVolumes`<sup>Required</sup> <a name="EbsVolumes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes"></a>

```go
func EbsVolumes() GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference</a>

---

##### `EbsVolumesInput`<sup>Optional</sup> <a name="EbsVolumesInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput"></a>

```go
func EbsVolumesInput() GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---


### GuarddutyOrganizationConfigurationDatasourcesOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

guarddutyorganizationconfiguration.NewGuarddutyOrganizationConfigurationDatasourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyOrganizationConfigurationDatasourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putKubernetes">PutKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putMalwareProtection">PutMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putS3Logs">PutS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetKubernetes">ResetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetMalwareProtection">ResetMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetS3Logs">ResetS3Logs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKubernetes` <a name="PutKubernetes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putKubernetes"></a>

```go
func PutKubernetes(value GuarddutyOrganizationConfigurationDatasourcesKubernetes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a>

---

##### `PutMalwareProtection` <a name="PutMalwareProtection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putMalwareProtection"></a>

```go
func PutMalwareProtection(value GuarddutyOrganizationConfigurationDatasourcesMalwareProtection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putMalwareProtection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a>

---

##### `PutS3Logs` <a name="PutS3Logs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putS3Logs"></a>

```go
func PutS3Logs(value GuarddutyOrganizationConfigurationDatasourcesS3Logs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a>

---

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetKubernetes"></a>

```go
func ResetKubernetes()
```

##### `ResetMalwareProtection` <a name="ResetMalwareProtection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetMalwareProtection"></a>

```go
func ResetMalwareProtection()
```

##### `ResetS3Logs` <a name="ResetS3Logs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetS3Logs"></a>

```go
func ResetS3Logs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference">GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.malwareProtection">MalwareProtection</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference">GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.kubernetesInput">KubernetesInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.malwareProtectionInput">MalwareProtectionInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.s3LogsInput">S3LogsInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.kubernetes"></a>

```go
func Kubernetes() GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference">GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference</a>

---

##### `MalwareProtection`<sup>Required</sup> <a name="MalwareProtection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.malwareProtection"></a>

```go
func MalwareProtection() GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference</a>

---

##### `S3Logs`<sup>Required</sup> <a name="S3Logs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.s3Logs"></a>

```go
func S3Logs() GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference">GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference</a>

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.kubernetesInput"></a>

```go
func KubernetesInput() GuarddutyOrganizationConfigurationDatasourcesKubernetes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a>

---

##### `MalwareProtectionInput`<sup>Optional</sup> <a name="MalwareProtectionInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.malwareProtectionInput"></a>

```go
func MalwareProtectionInput() GuarddutyOrganizationConfigurationDatasourcesMalwareProtection
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a>

---

##### `S3LogsInput`<sup>Optional</sup> <a name="S3LogsInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.s3LogsInput"></a>

```go
func S3LogsInput() GuarddutyOrganizationConfigurationDatasourcesS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyOrganizationConfigurationDatasources
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a>

---


### GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutyorganizationconfiguration"

guarddutyorganizationconfiguration.NewGuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.autoEnableInput">AutoEnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.autoEnable">AutoEnable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoEnableInput`<sup>Optional</sup> <a name="AutoEnableInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.autoEnableInput"></a>

```go
func AutoEnableInput() interface{}
```

- *Type:* interface{}

---

##### `AutoEnable`<sup>Required</sup> <a name="AutoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.autoEnable"></a>

```go
func AutoEnable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.internalValue"></a>

```go
func InternalValue() GuarddutyOrganizationConfigurationDatasourcesS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a>

---



