# `docdbClusterInstance` Submodule <a name="`docdbClusterInstance` Submodule" id="@cdktf/provider-aws.docdbClusterInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbClusterInstance <a name="DocdbClusterInstance" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance aws_docdb_cluster_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/docdbclusterinstance"

docdbclusterinstance.NewDocdbClusterInstance(scope Construct, id *string, config DocdbClusterInstanceConfig) DocdbClusterInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig">DocdbClusterInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig">DocdbClusterInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetCaCertIdentifier">ResetCaCertIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetEnablePerformanceInsights">ResetEnablePerformanceInsights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetIdentifierPrefix">ResetIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetPerformanceInsightsKmsKeyId">ResetPerformanceInsightsKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetPromotionTier">ResetPromotionTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.putTimeouts"></a>

```go
func PutTimeouts(value DocdbClusterInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a>

---

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetApplyImmediately"></a>

```go
func ResetApplyImmediately()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetAutoMinorVersionUpgrade"></a>

```go
func ResetAutoMinorVersionUpgrade()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetCaCertIdentifier` <a name="ResetCaCertIdentifier" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetCaCertIdentifier"></a>

```go
func ResetCaCertIdentifier()
```

##### `ResetEnablePerformanceInsights` <a name="ResetEnablePerformanceInsights" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetEnablePerformanceInsights"></a>

```go
func ResetEnablePerformanceInsights()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetIdentifier"></a>

```go
func ResetIdentifier()
```

##### `ResetIdentifierPrefix` <a name="ResetIdentifierPrefix" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetIdentifierPrefix"></a>

```go
func ResetIdentifierPrefix()
```

##### `ResetPerformanceInsightsKmsKeyId` <a name="ResetPerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetPerformanceInsightsKmsKeyId"></a>

```go
func ResetPerformanceInsightsKmsKeyId()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetPromotionTier` <a name="ResetPromotionTier" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetPromotionTier"></a>

```go
func ResetPromotionTier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/docdbclusterinstance"

docdbclusterinstance.DocdbClusterInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/docdbclusterinstance"

docdbclusterinstance.DocdbClusterInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/docdbclusterinstance"

docdbclusterinstance.DocdbClusterInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.dbiResourceId">DbiResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.storageEncrypted">StorageEncrypted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference">DocdbClusterInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.writer">Writer</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.caCertIdentifierInput">CaCertIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.enablePerformanceInsightsInput">EnablePerformanceInsightsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifierPrefixInput">IdentifierPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.instanceClassInput">InstanceClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.performanceInsightsKmsKeyIdInput">PerformanceInsightsKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.promotionTierInput">PromotionTierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.caCertIdentifier">CaCertIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.enablePerformanceInsights">EnablePerformanceInsights</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifierPrefix">IdentifierPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.instanceClass">InstanceClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.promotionTier">PromotionTier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DbiResourceId`<sup>Required</sup> <a name="DbiResourceId" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.dbiResourceId"></a>

```go
func DbiResourceId() *string
```

- *Type:* *string

---

##### `DbSubnetGroupName`<sup>Required</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.dbSubnetGroupName"></a>

```go
func DbSubnetGroupName() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.preferredBackupWindow"></a>

```go
func PreferredBackupWindow() *string
```

- *Type:* *string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.storageEncrypted"></a>

```go
func StorageEncrypted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.timeouts"></a>

```go
func Timeouts() DocdbClusterInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference">DocdbClusterInstanceTimeoutsOutputReference</a>

---

##### `Writer`<sup>Required</sup> <a name="Writer" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.writer"></a>

```go
func Writer() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.applyImmediatelyInput"></a>

```go
func ApplyImmediatelyInput() interface{}
```

- *Type:* interface{}

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.autoMinorVersionUpgradeInput"></a>

```go
func AutoMinorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `CaCertIdentifierInput`<sup>Optional</sup> <a name="CaCertIdentifierInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.caCertIdentifierInput"></a>

```go
func CaCertIdentifierInput() *string
```

- *Type:* *string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `EnablePerformanceInsightsInput`<sup>Optional</sup> <a name="EnablePerformanceInsightsInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.enablePerformanceInsightsInput"></a>

```go
func EnablePerformanceInsightsInput() interface{}
```

- *Type:* interface{}

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `IdentifierPrefixInput`<sup>Optional</sup> <a name="IdentifierPrefixInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifierPrefixInput"></a>

```go
func IdentifierPrefixInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.instanceClassInput"></a>

```go
func InstanceClassInput() *string
```

- *Type:* *string

---

##### `PerformanceInsightsKmsKeyIdInput`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyIdInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.performanceInsightsKmsKeyIdInput"></a>

```go
func PerformanceInsightsKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `PromotionTierInput`<sup>Optional</sup> <a name="PromotionTierInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.promotionTierInput"></a>

```go
func PromotionTierInput() *f64
```

- *Type:* *f64

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.applyImmediately"></a>

```go
func ApplyImmediately() interface{}
```

- *Type:* interface{}

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.autoMinorVersionUpgrade"></a>

```go
func AutoMinorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `CaCertIdentifier`<sup>Required</sup> <a name="CaCertIdentifier" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.caCertIdentifier"></a>

```go
func CaCertIdentifier() *string
```

- *Type:* *string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `EnablePerformanceInsights`<sup>Required</sup> <a name="EnablePerformanceInsights" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.enablePerformanceInsights"></a>

```go
func EnablePerformanceInsights() interface{}
```

- *Type:* interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `IdentifierPrefix`<sup>Required</sup> <a name="IdentifierPrefix" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifierPrefix"></a>

```go
func IdentifierPrefix() *string
```

- *Type:* *string

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.instanceClass"></a>

```go
func InstanceClass() *string
```

- *Type:* *string

---

##### `PerformanceInsightsKmsKeyId`<sup>Required</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.performanceInsightsKmsKeyId"></a>

```go
func PerformanceInsightsKmsKeyId() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `PromotionTier`<sup>Required</sup> <a name="PromotionTier" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.promotionTier"></a>

```go
func PromotionTier() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbClusterInstanceConfig <a name="DocdbClusterInstanceConfig" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/docdbclusterinstance"

&docdbclusterinstance.DocdbClusterInstanceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterIdentifier: *string,
	InstanceClass: *string,
	ApplyImmediately: interface{},
	AutoMinorVersionUpgrade: interface{},
	AvailabilityZone: *string,
	CaCertIdentifier: *string,
	EnablePerformanceInsights: interface{},
	Engine: *string,
	Id: *string,
	Identifier: *string,
	IdentifierPrefix: *string,
	PerformanceInsightsKmsKeyId: *string,
	PreferredMaintenanceWindow: *string,
	PromotionTier: *f64,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.docdbClusterInstance.DocdbClusterInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#cluster_identifier DocdbClusterInstance#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.instanceClass">InstanceClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#instance_class DocdbClusterInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#apply_immediately DocdbClusterInstance#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#auto_minor_version_upgrade DocdbClusterInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#availability_zone DocdbClusterInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.caCertIdentifier">CaCertIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#ca_cert_identifier DocdbClusterInstance#ca_cert_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.enablePerformanceInsights">EnablePerformanceInsights</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#enable_performance_insights DocdbClusterInstance#enable_performance_insights}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#engine DocdbClusterInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#id DocdbClusterInstance#id}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#identifier DocdbClusterInstance#identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.identifierPrefix">IdentifierPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#identifier_prefix DocdbClusterInstance#identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#performance_insights_kms_key_id DocdbClusterInstance#performance_insights_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#preferred_maintenance_window DocdbClusterInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.promotionTier">PromotionTier</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#promotion_tier DocdbClusterInstance#promotion_tier}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#tags DocdbClusterInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#tags_all DocdbClusterInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#cluster_identifier DocdbClusterInstance#cluster_identifier}.

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.instanceClass"></a>

```go
InstanceClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#instance_class DocdbClusterInstance#instance_class}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.applyImmediately"></a>

```go
ApplyImmediately interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#apply_immediately DocdbClusterInstance#apply_immediately}.

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.autoMinorVersionUpgrade"></a>

```go
AutoMinorVersionUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#auto_minor_version_upgrade DocdbClusterInstance#auto_minor_version_upgrade}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#availability_zone DocdbClusterInstance#availability_zone}.

---

##### `CaCertIdentifier`<sup>Optional</sup> <a name="CaCertIdentifier" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.caCertIdentifier"></a>

```go
CaCertIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#ca_cert_identifier DocdbClusterInstance#ca_cert_identifier}.

---

##### `EnablePerformanceInsights`<sup>Optional</sup> <a name="EnablePerformanceInsights" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.enablePerformanceInsights"></a>

```go
EnablePerformanceInsights interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#enable_performance_insights DocdbClusterInstance#enable_performance_insights}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#engine DocdbClusterInstance#engine}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#id DocdbClusterInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#identifier DocdbClusterInstance#identifier}.

---

##### `IdentifierPrefix`<sup>Optional</sup> <a name="IdentifierPrefix" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.identifierPrefix"></a>

```go
IdentifierPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#identifier_prefix DocdbClusterInstance#identifier_prefix}.

---

##### `PerformanceInsightsKmsKeyId`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.performanceInsightsKmsKeyId"></a>

```go
PerformanceInsightsKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#performance_insights_kms_key_id DocdbClusterInstance#performance_insights_kms_key_id}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#preferred_maintenance_window DocdbClusterInstance#preferred_maintenance_window}.

---

##### `PromotionTier`<sup>Optional</sup> <a name="PromotionTier" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.promotionTier"></a>

```go
PromotionTier *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#promotion_tier DocdbClusterInstance#promotion_tier}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#tags DocdbClusterInstance#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#tags_all DocdbClusterInstance#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.timeouts"></a>

```go
Timeouts DocdbClusterInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#timeouts DocdbClusterInstance#timeouts}

---

### DocdbClusterInstanceTimeouts <a name="DocdbClusterInstanceTimeouts" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/docdbclusterinstance"

&docdbclusterinstance.DocdbClusterInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#create DocdbClusterInstance#create}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#delete DocdbClusterInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#update DocdbClusterInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#create DocdbClusterInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#delete DocdbClusterInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance#update DocdbClusterInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbClusterInstanceTimeoutsOutputReference <a name="DocdbClusterInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/docdbclusterinstance"

docdbclusterinstance.NewDocdbClusterInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocdbClusterInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



