# `efsReplicationConfiguration` Submodule <a name="`efsReplicationConfiguration` Submodule" id="@cdktf/provider-aws.efsReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsReplicationConfiguration <a name="EfsReplicationConfiguration" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration aws_efs_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsreplicationconfiguration"

efsreplicationconfiguration.NewEfsReplicationConfiguration(scope Construct, id *string, config EfsReplicationConfigurationConfig) EfsReplicationConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig">EfsReplicationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig">EfsReplicationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putDestination"></a>

```go
func PutDestination(value EfsReplicationConfigurationDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value EfsReplicationConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts">EfsReplicationConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsreplicationconfiguration"

efsreplicationconfiguration.EfsReplicationConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsreplicationconfiguration"

efsreplicationconfiguration.EfsReplicationConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsreplicationconfiguration"

efsreplicationconfiguration.EfsReplicationConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference">EfsReplicationConfigurationDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.originalSourceFileSystemArn">OriginalSourceFileSystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemArn">SourceFileSystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemRegion">SourceFileSystemRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference">EfsReplicationConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemIdInput">SourceFileSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemId">SourceFileSystemId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.destination"></a>

```go
func Destination() EfsReplicationConfigurationDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference">EfsReplicationConfigurationDestinationOutputReference</a>

---

##### `OriginalSourceFileSystemArn`<sup>Required</sup> <a name="OriginalSourceFileSystemArn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.originalSourceFileSystemArn"></a>

```go
func OriginalSourceFileSystemArn() *string
```

- *Type:* *string

---

##### `SourceFileSystemArn`<sup>Required</sup> <a name="SourceFileSystemArn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemArn"></a>

```go
func SourceFileSystemArn() *string
```

- *Type:* *string

---

##### `SourceFileSystemRegion`<sup>Required</sup> <a name="SourceFileSystemRegion" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemRegion"></a>

```go
func SourceFileSystemRegion() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.timeouts"></a>

```go
func Timeouts() EfsReplicationConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference">EfsReplicationConfigurationTimeoutsOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.destinationInput"></a>

```go
func DestinationInput() EfsReplicationConfigurationDestination
```

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SourceFileSystemIdInput`<sup>Optional</sup> <a name="SourceFileSystemIdInput" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemIdInput"></a>

```go
func SourceFileSystemIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SourceFileSystemId`<sup>Required</sup> <a name="SourceFileSystemId" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.sourceFileSystemId"></a>

```go
func SourceFileSystemId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EfsReplicationConfigurationConfig <a name="EfsReplicationConfigurationConfig" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsreplicationconfiguration"

&efsreplicationconfiguration.EfsReplicationConfigurationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Destination: github.com/cdktf/cdktf-provider-aws-go/aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination,
	SourceFileSystemId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.sourceFileSystemId">SourceFileSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#source_file_system_id EfsReplicationConfiguration#source_file_system_id}. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#id EfsReplicationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts">EfsReplicationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.destination"></a>

```go
Destination EfsReplicationConfigurationDestination
```

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#destination EfsReplicationConfiguration#destination}

---

##### `SourceFileSystemId`<sup>Required</sup> <a name="SourceFileSystemId" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.sourceFileSystemId"></a>

```go
SourceFileSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#source_file_system_id EfsReplicationConfiguration#source_file_system_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#id EfsReplicationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationConfig.property.timeouts"></a>

```go
Timeouts EfsReplicationConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts">EfsReplicationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#timeouts EfsReplicationConfiguration#timeouts}

---

### EfsReplicationConfigurationDestination <a name="EfsReplicationConfigurationDestination" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsreplicationconfiguration"

&efsreplicationconfiguration.EfsReplicationConfigurationDestination {
	AvailabilityZoneName: *string,
	KmsKeyId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#availability_zone_name EfsReplicationConfiguration#availability_zone_name}. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#kms_key_id EfsReplicationConfiguration#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#region EfsReplicationConfiguration#region}. |

---

##### `AvailabilityZoneName`<sup>Optional</sup> <a name="AvailabilityZoneName" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.property.availabilityZoneName"></a>

```go
AvailabilityZoneName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#availability_zone_name EfsReplicationConfiguration#availability_zone_name}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#kms_key_id EfsReplicationConfiguration#kms_key_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#region EfsReplicationConfiguration#region}.

---

### EfsReplicationConfigurationTimeouts <a name="EfsReplicationConfigurationTimeouts" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsreplicationconfiguration"

&efsreplicationconfiguration.EfsReplicationConfigurationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#create EfsReplicationConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#delete EfsReplicationConfiguration#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#create EfsReplicationConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_replication_configuration#delete EfsReplicationConfiguration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EfsReplicationConfigurationDestinationOutputReference <a name="EfsReplicationConfigurationDestinationOutputReference" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsreplicationconfiguration"

efsreplicationconfiguration.NewEfsReplicationConfigurationDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EfsReplicationConfigurationDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resetAvailabilityZoneName">ResetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZoneName` <a name="ResetAvailabilityZoneName" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resetAvailabilityZoneName"></a>

```go
func ResetAvailabilityZoneName()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.availabilityZoneNameInput">AvailabilityZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AvailabilityZoneNameInput`<sup>Optional</sup> <a name="AvailabilityZoneNameInput" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.availabilityZoneNameInput"></a>

```go
func AvailabilityZoneNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.availabilityZoneName"></a>

```go
func AvailabilityZoneName() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() EfsReplicationConfigurationDestination
```

- *Type:* <a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationDestination">EfsReplicationConfigurationDestination</a>

---


### EfsReplicationConfigurationTimeoutsOutputReference <a name="EfsReplicationConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/efsreplicationconfiguration"

efsreplicationconfiguration.NewEfsReplicationConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EfsReplicationConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.efsReplicationConfiguration.EfsReplicationConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



