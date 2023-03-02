# `ebsSnapshotImport` Submodule <a name="`ebsSnapshotImport` Submodule" id="@cdktf/provider-aws.ebsSnapshotImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EbsSnapshotImport <a name="EbsSnapshotImport" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import aws_ebs_snapshot_import}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

ebssnapshotimport.NewEbsSnapshotImport(scope Construct, id *string, config EbsSnapshotImportConfig) EbsSnapshotImport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig">EbsSnapshotImportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig">EbsSnapshotImportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData">PutClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer">PutDiskContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetClientData">ResetClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetPermanentRestore">ResetPermanentRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetStorageTier">ResetStorageTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTemporaryRestoreDays">ResetTemporaryRestoreDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutClientData` <a name="PutClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData"></a>

```go
func PutClientData(value EbsSnapshotImportClientData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---

##### `PutDiskContainer` <a name="PutDiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer"></a>

```go
func PutDiskContainer(value EbsSnapshotImportDiskContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts"></a>

```go
func PutTimeouts(value EbsSnapshotImportTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>

---

##### `ResetClientData` <a name="ResetClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetClientData"></a>

```go
func ResetClientData()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetPermanentRestore` <a name="ResetPermanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetPermanentRestore"></a>

```go
func ResetPermanentRestore()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetRoleName"></a>

```go
func ResetRoleName()
```

##### `ResetStorageTier` <a name="ResetStorageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetStorageTier"></a>

```go
func ResetStorageTier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTemporaryRestoreDays` <a name="ResetTemporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTemporaryRestoreDays"></a>

```go
func ResetTemporaryRestoreDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

ebssnapshotimport.EbsSnapshotImport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

ebssnapshotimport.EbsSnapshotImport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

ebssnapshotimport.EbsSnapshotImport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientData">ClientData</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference">EbsSnapshotImportClientDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dataEncryptionKeyId">DataEncryptionKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainer">DiskContainer</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference">EbsSnapshotImportDiskContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerAlias">OwnerAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference">EbsSnapshotImportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientDataInput">ClientDataInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainerInput">DiskContainerInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestoreInput">PermanentRestoreInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTierInput">StorageTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDaysInput">TemporaryRestoreDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestore">PermanentRestore</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTier">StorageTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDays">TemporaryRestoreDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClientData`<sup>Required</sup> <a name="ClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientData"></a>

```go
func ClientData() EbsSnapshotImportClientDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference">EbsSnapshotImportClientDataOutputReference</a>

---

##### `DataEncryptionKeyId`<sup>Required</sup> <a name="DataEncryptionKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dataEncryptionKeyId"></a>

```go
func DataEncryptionKeyId() *string
```

- *Type:* *string

---

##### `DiskContainer`<sup>Required</sup> <a name="DiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainer"></a>

```go
func DiskContainer() EbsSnapshotImportDiskContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference">EbsSnapshotImportDiskContainerOutputReference</a>

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.outpostArn"></a>

```go
func OutpostArn() *string
```

- *Type:* *string

---

##### `OwnerAlias`<sup>Required</sup> <a name="OwnerAlias" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerAlias"></a>

```go
func OwnerAlias() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeouts"></a>

```go
func Timeouts() EbsSnapshotImportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference">EbsSnapshotImportTimeoutsOutputReference</a>

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `ClientDataInput`<sup>Optional</sup> <a name="ClientDataInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientDataInput"></a>

```go
func ClientDataInput() EbsSnapshotImportClientData
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiskContainerInput`<sup>Optional</sup> <a name="DiskContainerInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainerInput"></a>

```go
func DiskContainerInput() EbsSnapshotImportDiskContainer
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `PermanentRestoreInput`<sup>Optional</sup> <a name="PermanentRestoreInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestoreInput"></a>

```go
func PermanentRestoreInput() interface{}
```

- *Type:* interface{}

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `StorageTierInput`<sup>Optional</sup> <a name="StorageTierInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTierInput"></a>

```go
func StorageTierInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemporaryRestoreDaysInput`<sup>Optional</sup> <a name="TemporaryRestoreDaysInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDaysInput"></a>

```go
func TemporaryRestoreDaysInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `PermanentRestore`<sup>Required</sup> <a name="PermanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestore"></a>

```go
func PermanentRestore() interface{}
```

- *Type:* interface{}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `StorageTier`<sup>Required</sup> <a name="StorageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTier"></a>

```go
func StorageTier() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemporaryRestoreDays`<sup>Required</sup> <a name="TemporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDays"></a>

```go
func TemporaryRestoreDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EbsSnapshotImportClientData <a name="EbsSnapshotImportClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

&ebssnapshotimport.EbsSnapshotImportClientData {
	Comment: *string,
	UploadEnd: *string,
	UploadSize: *f64,
	UploadStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#comment EbsSnapshotImport#comment}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadEnd">UploadEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadSize">UploadSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadStart">UploadStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#comment EbsSnapshotImport#comment}.

---

##### `UploadEnd`<sup>Optional</sup> <a name="UploadEnd" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadEnd"></a>

```go
UploadEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}.

---

##### `UploadSize`<sup>Optional</sup> <a name="UploadSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadSize"></a>

```go
UploadSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}.

---

##### `UploadStart`<sup>Optional</sup> <a name="UploadStart" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadStart"></a>

```go
UploadStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}.

---

### EbsSnapshotImportConfig <a name="EbsSnapshotImportConfig" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

&ebssnapshotimport.EbsSnapshotImportConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DiskContainer: github.com/cdktf/cdktf-provider-aws-go/aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer,
	ClientData: github.com/cdktf/cdktf-provider-aws-go/aws.ebsSnapshotImport.EbsSnapshotImportClientData,
	Description: *string,
	Encrypted: interface{},
	Id: *string,
	KmsKeyId: *string,
	PermanentRestore: interface{},
	RoleName: *string,
	StorageTier: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TemporaryRestoreDays: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.ebsSnapshotImport.EbsSnapshotImportTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.diskContainer">DiskContainer</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | disk_container block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.clientData">ClientData</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | client_data block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.permanentRestore">PermanentRestore</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.storageTier">StorageTier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.temporaryRestoreDays">TemporaryRestoreDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiskContainer`<sup>Required</sup> <a name="DiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.diskContainer"></a>

```go
DiskContainer EbsSnapshotImportDiskContainer
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

disk_container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#disk_container EbsSnapshotImport#disk_container}

---

##### `ClientData`<sup>Optional</sup> <a name="ClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.clientData"></a>

```go
ClientData EbsSnapshotImportClientData
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

client_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#client_data EbsSnapshotImport#client_data}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}.

---

##### `PermanentRestore`<sup>Optional</sup> <a name="PermanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.permanentRestore"></a>

```go
PermanentRestore interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}.

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}.

---

##### `StorageTier`<sup>Optional</sup> <a name="StorageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.storageTier"></a>

```go
StorageTier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}.

---

##### `TemporaryRestoreDays`<sup>Optional</sup> <a name="TemporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.temporaryRestoreDays"></a>

```go
TemporaryRestoreDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.timeouts"></a>

```go
Timeouts EbsSnapshotImportTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#timeouts EbsSnapshotImport#timeouts}

---

### EbsSnapshotImportDiskContainer <a name="EbsSnapshotImportDiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

&ebssnapshotimport.EbsSnapshotImportDiskContainer {
	Format: *string,
	Description: *string,
	Url: *string,
	UserBucket: github.com/cdktf/cdktf-provider-aws-go/aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#format EbsSnapshotImport#format}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#url EbsSnapshotImport#url}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.userBucket">UserBucket</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | user_bucket block. |

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#format EbsSnapshotImport#format}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#url EbsSnapshotImport#url}.

---

##### `UserBucket`<sup>Optional</sup> <a name="UserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.userBucket"></a>

```go
UserBucket EbsSnapshotImportDiskContainerUserBucket
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

user_bucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#user_bucket EbsSnapshotImport#user_bucket}

---

### EbsSnapshotImportDiskContainerUserBucket <a name="EbsSnapshotImportDiskContainerUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

&ebssnapshotimport.EbsSnapshotImportDiskContainerUserBucket {
	S3Bucket: *string,
	S3Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Key">S3Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}.

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Key"></a>

```go
S3Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}.

---

### EbsSnapshotImportTimeouts <a name="EbsSnapshotImportTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

&ebssnapshotimport.EbsSnapshotImportTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#create EbsSnapshotImport#create}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#delete EbsSnapshotImport#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#create EbsSnapshotImport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#delete EbsSnapshotImport#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EbsSnapshotImportClientDataOutputReference <a name="EbsSnapshotImportClientDataOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

ebssnapshotimport.NewEbsSnapshotImportClientDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EbsSnapshotImportClientDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadEnd">ResetUploadEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadSize">ResetUploadSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadStart">ResetUploadStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetUploadEnd` <a name="ResetUploadEnd" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadEnd"></a>

```go
func ResetUploadEnd()
```

##### `ResetUploadSize` <a name="ResetUploadSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadSize"></a>

```go
func ResetUploadSize()
```

##### `ResetUploadStart` <a name="ResetUploadStart" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadStart"></a>

```go
func ResetUploadStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEndInput">UploadEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSizeInput">UploadSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStartInput">UploadStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEnd">UploadEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSize">UploadSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStart">UploadStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `UploadEndInput`<sup>Optional</sup> <a name="UploadEndInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEndInput"></a>

```go
func UploadEndInput() *string
```

- *Type:* *string

---

##### `UploadSizeInput`<sup>Optional</sup> <a name="UploadSizeInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSizeInput"></a>

```go
func UploadSizeInput() *f64
```

- *Type:* *f64

---

##### `UploadStartInput`<sup>Optional</sup> <a name="UploadStartInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStartInput"></a>

```go
func UploadStartInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `UploadEnd`<sup>Required</sup> <a name="UploadEnd" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEnd"></a>

```go
func UploadEnd() *string
```

- *Type:* *string

---

##### `UploadSize`<sup>Required</sup> <a name="UploadSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSize"></a>

```go
func UploadSize() *f64
```

- *Type:* *f64

---

##### `UploadStart`<sup>Required</sup> <a name="UploadStart" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStart"></a>

```go
func UploadStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.internalValue"></a>

```go
func InternalValue() EbsSnapshotImportClientData
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---


### EbsSnapshotImportDiskContainerOutputReference <a name="EbsSnapshotImportDiskContainerOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

ebssnapshotimport.NewEbsSnapshotImportDiskContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EbsSnapshotImportDiskContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket">PutUserBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUserBucket">ResetUserBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUserBucket` <a name="PutUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket"></a>

```go
func PutUserBucket(value EbsSnapshotImportDiskContainerUserBucket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUserBucket` <a name="ResetUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUserBucket"></a>

```go
func ResetUserBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucket">UserBucket</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference">EbsSnapshotImportDiskContainerUserBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucketInput">UserBucketInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UserBucket`<sup>Required</sup> <a name="UserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucket"></a>

```go
func UserBucket() EbsSnapshotImportDiskContainerUserBucketOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference">EbsSnapshotImportDiskContainerUserBucketOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UserBucketInput`<sup>Optional</sup> <a name="UserBucketInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucketInput"></a>

```go
func UserBucketInput() EbsSnapshotImportDiskContainerUserBucket
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() EbsSnapshotImportDiskContainer
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---


### EbsSnapshotImportDiskContainerUserBucketOutputReference <a name="EbsSnapshotImportDiskContainerUserBucketOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

ebssnapshotimport.NewEbsSnapshotImportDiskContainerUserBucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EbsSnapshotImportDiskContainerUserBucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Key">S3Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3KeyInput"></a>

```go
func S3KeyInput() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Key"></a>

```go
func S3Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.internalValue"></a>

```go
func InternalValue() EbsSnapshotImportDiskContainerUserBucket
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---


### EbsSnapshotImportTimeoutsOutputReference <a name="EbsSnapshotImportTimeoutsOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ebssnapshotimport"

ebssnapshotimport.NewEbsSnapshotImportTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EbsSnapshotImportTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



