# `dataAwsDbSnapshot` Submodule <a name="`dataAwsDbSnapshot` Submodule" id="@cdktf/provider-aws.dataAwsDbSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDbSnapshot <a name="DataAwsDbSnapshot" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot aws_db_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdbsnapshot"

dataawsdbsnapshot.NewDataAwsDbSnapshot(scope Construct, id *string, config DataAwsDbSnapshotConfig) DataAwsDbSnapshot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig">DataAwsDbSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig">DataAwsDbSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbInstanceIdentifier">ResetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbSnapshotIdentifier">ResetDbSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludePublic">ResetIncludePublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludeShared">ResetIncludeShared</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetMostRecent">ResetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetSnapshotType">ResetSnapshotType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDbInstanceIdentifier` <a name="ResetDbInstanceIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbInstanceIdentifier"></a>

```go
func ResetDbInstanceIdentifier()
```

##### `ResetDbSnapshotIdentifier` <a name="ResetDbSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbSnapshotIdentifier"></a>

```go
func ResetDbSnapshotIdentifier()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludePublic` <a name="ResetIncludePublic" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludePublic"></a>

```go
func ResetIncludePublic()
```

##### `ResetIncludeShared` <a name="ResetIncludeShared" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludeShared"></a>

```go
func ResetIncludeShared()
```

##### `ResetMostRecent` <a name="ResetMostRecent" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetMostRecent"></a>

```go
func ResetMostRecent()
```

##### `ResetSnapshotType` <a name="ResetSnapshotType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetSnapshotType"></a>

```go
func ResetSnapshotType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdbsnapshot"

dataawsdbsnapshot.DataAwsDbSnapshot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdbsnapshot"

dataawsdbsnapshot.DataAwsDbSnapshot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdbsnapshot"

dataawsdbsnapshot.DataAwsDbSnapshot_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotArn">DbSnapshotArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.encrypted">Encrypted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.optionGroupName">OptionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotCreateTime">SnapshotCreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceDbSnapshotIdentifier">SourceDbSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceRegion">SourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifierInput">DbInstanceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifierInput">DbSnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublicInput">IncludePublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeSharedInput">IncludeSharedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecentInput">MostRecentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotTypeInput">SnapshotTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifier">DbInstanceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifier">DbSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublic">IncludePublic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeShared">IncludeShared</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecent">MostRecent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotType">SnapshotType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.allocatedStorage"></a>

```go
func AllocatedStorage() *f64
```

- *Type:* *f64

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `DbSnapshotArn`<sup>Required</sup> <a name="DbSnapshotArn" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotArn"></a>

```go
func DbSnapshotArn() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `OptionGroupName`<sup>Required</sup> <a name="OptionGroupName" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.optionGroupName"></a>

```go
func OptionGroupName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SnapshotCreateTime`<sup>Required</sup> <a name="SnapshotCreateTime" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotCreateTime"></a>

```go
func SnapshotCreateTime() *string
```

- *Type:* *string

---

##### `SourceDbSnapshotIdentifier`<sup>Required</sup> <a name="SourceDbSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceDbSnapshotIdentifier"></a>

```go
func SourceDbSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceRegion"></a>

```go
func SourceRegion() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `DbInstanceIdentifierInput`<sup>Optional</sup> <a name="DbInstanceIdentifierInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifierInput"></a>

```go
func DbInstanceIdentifierInput() *string
```

- *Type:* *string

---

##### `DbSnapshotIdentifierInput`<sup>Optional</sup> <a name="DbSnapshotIdentifierInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifierInput"></a>

```go
func DbSnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludePublicInput`<sup>Optional</sup> <a name="IncludePublicInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublicInput"></a>

```go
func IncludePublicInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeSharedInput`<sup>Optional</sup> <a name="IncludeSharedInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeSharedInput"></a>

```go
func IncludeSharedInput() interface{}
```

- *Type:* interface{}

---

##### `MostRecentInput`<sup>Optional</sup> <a name="MostRecentInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecentInput"></a>

```go
func MostRecentInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotTypeInput`<sup>Optional</sup> <a name="SnapshotTypeInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotTypeInput"></a>

```go
func SnapshotTypeInput() *string
```

- *Type:* *string

---

##### `DbInstanceIdentifier`<sup>Required</sup> <a name="DbInstanceIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifier"></a>

```go
func DbInstanceIdentifier() *string
```

- *Type:* *string

---

##### `DbSnapshotIdentifier`<sup>Required</sup> <a name="DbSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifier"></a>

```go
func DbSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludePublic`<sup>Required</sup> <a name="IncludePublic" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublic"></a>

```go
func IncludePublic() interface{}
```

- *Type:* interface{}

---

##### `IncludeShared`<sup>Required</sup> <a name="IncludeShared" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeShared"></a>

```go
func IncludeShared() interface{}
```

- *Type:* interface{}

---

##### `MostRecent`<sup>Required</sup> <a name="MostRecent" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecent"></a>

```go
func MostRecent() interface{}
```

- *Type:* interface{}

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotType"></a>

```go
func SnapshotType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDbSnapshotConfig <a name="DataAwsDbSnapshotConfig" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdbsnapshot"

&dataawsdbsnapshot.DataAwsDbSnapshotConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DbInstanceIdentifier: *string,
	DbSnapshotIdentifier: *string,
	Id: *string,
	IncludePublic: interface{},
	IncludeShared: interface{},
	MostRecent: interface{},
	SnapshotType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbInstanceIdentifier">DbInstanceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbSnapshotIdentifier">DbSnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#id DataAwsDbSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includePublic">IncludePublic</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#include_public DataAwsDbSnapshot#include_public}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includeShared">IncludeShared</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#include_shared DataAwsDbSnapshot#include_shared}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.mostRecent">MostRecent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#most_recent DataAwsDbSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.snapshotType">SnapshotType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#snapshot_type DataAwsDbSnapshot#snapshot_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbInstanceIdentifier`<sup>Optional</sup> <a name="DbInstanceIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbInstanceIdentifier"></a>

```go
DbInstanceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}.

---

##### `DbSnapshotIdentifier`<sup>Optional</sup> <a name="DbSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbSnapshotIdentifier"></a>

```go
DbSnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#id DataAwsDbSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludePublic`<sup>Optional</sup> <a name="IncludePublic" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includePublic"></a>

```go
IncludePublic interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#include_public DataAwsDbSnapshot#include_public}.

---

##### `IncludeShared`<sup>Optional</sup> <a name="IncludeShared" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includeShared"></a>

```go
IncludeShared interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#include_shared DataAwsDbSnapshot#include_shared}.

---

##### `MostRecent`<sup>Optional</sup> <a name="MostRecent" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.mostRecent"></a>

```go
MostRecent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#most_recent DataAwsDbSnapshot#most_recent}.

---

##### `SnapshotType`<sup>Optional</sup> <a name="SnapshotType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.snapshotType"></a>

```go
SnapshotType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#snapshot_type DataAwsDbSnapshot#snapshot_type}.

---



