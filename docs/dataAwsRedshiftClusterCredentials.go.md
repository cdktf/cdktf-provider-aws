# `dataAwsRedshiftClusterCredentials` Submodule <a name="`dataAwsRedshiftClusterCredentials` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftClusterCredentials <a name="DataAwsRedshiftClusterCredentials" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials aws_redshift_cluster_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsredshiftclustercredentials"

dataawsredshiftclustercredentials.NewDataAwsRedshiftClusterCredentials(scope Construct, id *string, config DataAwsRedshiftClusterCredentialsConfig) DataAwsRedshiftClusterCredentials
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig">DataAwsRedshiftClusterCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig">DataAwsRedshiftClusterCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetAutoCreate">ResetAutoCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbGroups">ResetDbGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDurationSeconds">ResetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAutoCreate` <a name="ResetAutoCreate" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetAutoCreate"></a>

```go
func ResetAutoCreate()
```

##### `ResetDbGroups` <a name="ResetDbGroups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbGroups"></a>

```go
func ResetDbGroups()
```

##### `ResetDbName` <a name="ResetDbName" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbName"></a>

```go
func ResetDbName()
```

##### `ResetDurationSeconds` <a name="ResetDurationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDurationSeconds"></a>

```go
func ResetDurationSeconds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsredshiftclustercredentials"

dataawsredshiftclustercredentials.DataAwsRedshiftClusterCredentials_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsredshiftclustercredentials"

dataawsredshiftclustercredentials.DataAwsRedshiftClusterCredentials_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsredshiftclustercredentials"

dataawsredshiftclustercredentials.DataAwsRedshiftClusterCredentials_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbPassword">DbPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.expiration">Expiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreateInput">AutoCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroupsInput">DbGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUserInput">DbUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSecondsInput">DurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreate">AutoCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroups">DbGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUser">DbUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSeconds">DurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DbPassword`<sup>Required</sup> <a name="DbPassword" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbPassword"></a>

```go
func DbPassword() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.expiration"></a>

```go
func Expiration() *string
```

- *Type:* *string

---

##### `AutoCreateInput`<sup>Optional</sup> <a name="AutoCreateInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreateInput"></a>

```go
func AutoCreateInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `DbGroupsInput`<sup>Optional</sup> <a name="DbGroupsInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroupsInput"></a>

```go
func DbGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `DbUserInput`<sup>Optional</sup> <a name="DbUserInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUserInput"></a>

```go
func DbUserInput() *string
```

- *Type:* *string

---

##### `DurationSecondsInput`<sup>Optional</sup> <a name="DurationSecondsInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSecondsInput"></a>

```go
func DurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AutoCreate`<sup>Required</sup> <a name="AutoCreate" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreate"></a>

```go
func AutoCreate() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `DbGroups`<sup>Required</sup> <a name="DbGroups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroups"></a>

```go
func DbGroups() *[]*string
```

- *Type:* *[]*string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DbUser`<sup>Required</sup> <a name="DbUser" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUser"></a>

```go
func DbUser() *string
```

- *Type:* *string

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSeconds"></a>

```go
func DurationSeconds() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftClusterCredentialsConfig <a name="DataAwsRedshiftClusterCredentialsConfig" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsredshiftclustercredentials"

&dataawsredshiftclustercredentials.DataAwsRedshiftClusterCredentialsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterIdentifier: *string,
	DbUser: *string,
	AutoCreate: interface{},
	DbGroups: *[]*string,
	DbName: *string,
	DurationSeconds: *f64,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#cluster_identifier DataAwsRedshiftClusterCredentials#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbUser">DbUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_user DataAwsRedshiftClusterCredentials#db_user}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.autoCreate">AutoCreate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#auto_create DataAwsRedshiftClusterCredentials#auto_create}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbGroups">DbGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_groups DataAwsRedshiftClusterCredentials#db_groups}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbName">DbName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_name DataAwsRedshiftClusterCredentials#db_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.durationSeconds">DurationSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#duration_seconds DataAwsRedshiftClusterCredentials#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#id DataAwsRedshiftClusterCredentials#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#cluster_identifier DataAwsRedshiftClusterCredentials#cluster_identifier}.

---

##### `DbUser`<sup>Required</sup> <a name="DbUser" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbUser"></a>

```go
DbUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_user DataAwsRedshiftClusterCredentials#db_user}.

---

##### `AutoCreate`<sup>Optional</sup> <a name="AutoCreate" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.autoCreate"></a>

```go
AutoCreate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#auto_create DataAwsRedshiftClusterCredentials#auto_create}.

---

##### `DbGroups`<sup>Optional</sup> <a name="DbGroups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbGroups"></a>

```go
DbGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_groups DataAwsRedshiftClusterCredentials#db_groups}.

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_name DataAwsRedshiftClusterCredentials#db_name}.

---

##### `DurationSeconds`<sup>Optional</sup> <a name="DurationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.durationSeconds"></a>

```go
DurationSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#duration_seconds DataAwsRedshiftClusterCredentials#duration_seconds}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#id DataAwsRedshiftClusterCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



