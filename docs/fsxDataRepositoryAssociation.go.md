# `fsxDataRepositoryAssociation` Submodule <a name="`fsxDataRepositoryAssociation` Submodule" id="@cdktf/provider-aws.fsxDataRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxDataRepositoryAssociation <a name="FsxDataRepositoryAssociation" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association aws_fsx_data_repository_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

fsxdatarepositoryassociation.NewFsxDataRepositoryAssociation(scope Construct, id *string, config FsxDataRepositoryAssociationConfig) FsxDataRepositoryAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig">FsxDataRepositoryAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig">FsxDataRepositoryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetBatchImportMetaDataOnCreate">ResetBatchImportMetaDataOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetDeleteDataInFilesystem">ResetDeleteDataInFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetImportedFileChunkSize">ResetImportedFileChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3"></a>

```go
func PutS3(value FsxDataRepositoryAssociationS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts"></a>

```go
func PutTimeouts(value FsxDataRepositoryAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>

---

##### `ResetBatchImportMetaDataOnCreate` <a name="ResetBatchImportMetaDataOnCreate" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetBatchImportMetaDataOnCreate"></a>

```go
func ResetBatchImportMetaDataOnCreate()
```

##### `ResetDeleteDataInFilesystem` <a name="ResetDeleteDataInFilesystem" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetDeleteDataInFilesystem"></a>

```go
func ResetDeleteDataInFilesystem()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetImportedFileChunkSize` <a name="ResetImportedFileChunkSize" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetImportedFileChunkSize"></a>

```go
func ResetImportedFileChunkSize()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetS3"></a>

```go
func ResetS3()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

fsxdatarepositoryassociation.FsxDataRepositoryAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

fsxdatarepositoryassociation.FsxDataRepositoryAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

fsxdatarepositoryassociation.FsxDataRepositoryAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.associationId">AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference">FsxDataRepositoryAssociationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference">FsxDataRepositoryAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreateInput">BatchImportMetaDataOnCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPathInput">DataRepositoryPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystemInput">DeleteDataInFilesystemInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPathInput">FileSystemPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSizeInput">ImportedFileChunkSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate">BatchImportMetaDataOnCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPath">DataRepositoryPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystem">DeleteDataInFilesystem</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPath">FileSystemPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSize">ImportedFileChunkSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.associationId"></a>

```go
func AssociationId() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3"></a>

```go
func S3() FsxDataRepositoryAssociationS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference">FsxDataRepositoryAssociationS3OutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeouts"></a>

```go
func Timeouts() FsxDataRepositoryAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference">FsxDataRepositoryAssociationTimeoutsOutputReference</a>

---

##### `BatchImportMetaDataOnCreateInput`<sup>Optional</sup> <a name="BatchImportMetaDataOnCreateInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreateInput"></a>

```go
func BatchImportMetaDataOnCreateInput() interface{}
```

- *Type:* interface{}

---

##### `DataRepositoryPathInput`<sup>Optional</sup> <a name="DataRepositoryPathInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPathInput"></a>

```go
func DataRepositoryPathInput() *string
```

- *Type:* *string

---

##### `DeleteDataInFilesystemInput`<sup>Optional</sup> <a name="DeleteDataInFilesystemInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystemInput"></a>

```go
func DeleteDataInFilesystemInput() interface{}
```

- *Type:* interface{}

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemIdInput"></a>

```go
func FileSystemIdInput() *string
```

- *Type:* *string

---

##### `FileSystemPathInput`<sup>Optional</sup> <a name="FileSystemPathInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPathInput"></a>

```go
func FileSystemPathInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportedFileChunkSizeInput`<sup>Optional</sup> <a name="ImportedFileChunkSizeInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSizeInput"></a>

```go
func ImportedFileChunkSizeInput() *f64
```

- *Type:* *f64

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3Input"></a>

```go
func S3Input() FsxDataRepositoryAssociationS3
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BatchImportMetaDataOnCreate`<sup>Required</sup> <a name="BatchImportMetaDataOnCreate" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate"></a>

```go
func BatchImportMetaDataOnCreate() interface{}
```

- *Type:* interface{}

---

##### `DataRepositoryPath`<sup>Required</sup> <a name="DataRepositoryPath" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPath"></a>

```go
func DataRepositoryPath() *string
```

- *Type:* *string

---

##### `DeleteDataInFilesystem`<sup>Required</sup> <a name="DeleteDataInFilesystem" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystem"></a>

```go
func DeleteDataInFilesystem() interface{}
```

- *Type:* interface{}

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `FileSystemPath`<sup>Required</sup> <a name="FileSystemPath" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPath"></a>

```go
func FileSystemPath() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportedFileChunkSize`<sup>Required</sup> <a name="ImportedFileChunkSize" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSize"></a>

```go
func ImportedFileChunkSize() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxDataRepositoryAssociationConfig <a name="FsxDataRepositoryAssociationConfig" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

&fsxdatarepositoryassociation.FsxDataRepositoryAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataRepositoryPath: *string,
	FileSystemId: *string,
	FileSystemPath: *string,
	BatchImportMetaDataOnCreate: interface{},
	DeleteDataInFilesystem: interface{},
	Id: *string,
	ImportedFileChunkSize: *f64,
	S3: github.com/cdktf/cdktf-provider-aws-go/aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dataRepositoryPath">DataRepositoryPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemPath">FileSystemPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.batchImportMetaDataOnCreate">BatchImportMetaDataOnCreate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.deleteDataInFilesystem">DeleteDataInFilesystem</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.importedFileChunkSize">ImportedFileChunkSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataRepositoryPath`<sup>Required</sup> <a name="DataRepositoryPath" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dataRepositoryPath"></a>

```go
DataRepositoryPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}.

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemId"></a>

```go
FileSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}.

---

##### `FileSystemPath`<sup>Required</sup> <a name="FileSystemPath" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemPath"></a>

```go
FileSystemPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}.

---

##### `BatchImportMetaDataOnCreate`<sup>Optional</sup> <a name="BatchImportMetaDataOnCreate" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.batchImportMetaDataOnCreate"></a>

```go
BatchImportMetaDataOnCreate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}.

---

##### `DeleteDataInFilesystem`<sup>Optional</sup> <a name="DeleteDataInFilesystem" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.deleteDataInFilesystem"></a>

```go
DeleteDataInFilesystem interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportedFileChunkSize`<sup>Optional</sup> <a name="ImportedFileChunkSize" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.importedFileChunkSize"></a>

```go
ImportedFileChunkSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}.

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.s3"></a>

```go
S3 FsxDataRepositoryAssociationS3
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#s3 FsxDataRepositoryAssociation#s3}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.timeouts"></a>

```go
Timeouts FsxDataRepositoryAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#timeouts FsxDataRepositoryAssociation#timeouts}

---

### FsxDataRepositoryAssociationS3 <a name="FsxDataRepositoryAssociationS3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

&fsxdatarepositoryassociation.FsxDataRepositoryAssociationS3 {
	AutoExportPolicy: github.com/cdktf/cdktf-provider-aws-go/aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy,
	AutoImportPolicy: github.com/cdktf/cdktf-provider-aws-go/aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoExportPolicy">AutoExportPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | auto_export_policy block. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoImportPolicy">AutoImportPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | auto_import_policy block. |

---

##### `AutoExportPolicy`<sup>Optional</sup> <a name="AutoExportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoExportPolicy"></a>

```go
AutoExportPolicy FsxDataRepositoryAssociationS3AutoExportPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

auto_export_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#auto_export_policy FsxDataRepositoryAssociation#auto_export_policy}

---

##### `AutoImportPolicy`<sup>Optional</sup> <a name="AutoImportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoImportPolicy"></a>

```go
AutoImportPolicy FsxDataRepositoryAssociationS3AutoImportPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

auto_import_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#auto_import_policy FsxDataRepositoryAssociation#auto_import_policy}

---

### FsxDataRepositoryAssociationS3AutoExportPolicy <a name="FsxDataRepositoryAssociationS3AutoExportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

&fsxdatarepositoryassociation.FsxDataRepositoryAssociationS3AutoExportPolicy {
	Events: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.property.events">Events</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}. |

---

##### `Events`<sup>Optional</sup> <a name="Events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.property.events"></a>

```go
Events *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}.

---

### FsxDataRepositoryAssociationS3AutoImportPolicy <a name="FsxDataRepositoryAssociationS3AutoImportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

&fsxdatarepositoryassociation.FsxDataRepositoryAssociationS3AutoImportPolicy {
	Events: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.property.events">Events</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}. |

---

##### `Events`<sup>Optional</sup> <a name="Events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.property.events"></a>

```go
Events *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}.

---

### FsxDataRepositoryAssociationTimeouts <a name="FsxDataRepositoryAssociationTimeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

&fsxdatarepositoryassociation.FsxDataRepositoryAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#create FsxDataRepositoryAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete FsxDataRepositoryAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#update FsxDataRepositoryAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#create FsxDataRepositoryAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete FsxDataRepositoryAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#update FsxDataRepositoryAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference <a name="FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

fsxdatarepositoryassociation.NewFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resetEvents">ResetEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvents` <a name="ResetEvents" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resetEvents"></a>

```go
func ResetEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.eventsInput">EventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.eventsInput"></a>

```go
func EventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxDataRepositoryAssociationS3AutoExportPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---


### FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference <a name="FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

fsxdatarepositoryassociation.NewFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resetEvents">ResetEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvents` <a name="ResetEvents" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resetEvents"></a>

```go
func ResetEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.eventsInput">EventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.eventsInput"></a>

```go
func EventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxDataRepositoryAssociationS3AutoImportPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---


### FsxDataRepositoryAssociationS3OutputReference <a name="FsxDataRepositoryAssociationS3OutputReference" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

fsxdatarepositoryassociation.NewFsxDataRepositoryAssociationS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxDataRepositoryAssociationS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy">PutAutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy">PutAutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoExportPolicy">ResetAutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoImportPolicy">ResetAutoImportPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoExportPolicy` <a name="PutAutoExportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy"></a>

```go
func PutAutoExportPolicy(value FsxDataRepositoryAssociationS3AutoExportPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---

##### `PutAutoImportPolicy` <a name="PutAutoImportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy"></a>

```go
func PutAutoImportPolicy(value FsxDataRepositoryAssociationS3AutoImportPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---

##### `ResetAutoExportPolicy` <a name="ResetAutoExportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoExportPolicy"></a>

```go
func ResetAutoExportPolicy()
```

##### `ResetAutoImportPolicy` <a name="ResetAutoImportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoImportPolicy"></a>

```go
func ResetAutoImportPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy">AutoExportPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy">AutoImportPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicyInput">AutoExportPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicyInput">AutoImportPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoExportPolicy`<sup>Required</sup> <a name="AutoExportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy"></a>

```go
func AutoExportPolicy() FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a>

---

##### `AutoImportPolicy`<sup>Required</sup> <a name="AutoImportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy"></a>

```go
func AutoImportPolicy() FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a>

---

##### `AutoExportPolicyInput`<sup>Optional</sup> <a name="AutoExportPolicyInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicyInput"></a>

```go
func AutoExportPolicyInput() FsxDataRepositoryAssociationS3AutoExportPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---

##### `AutoImportPolicyInput`<sup>Optional</sup> <a name="AutoImportPolicyInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicyInput"></a>

```go
func AutoImportPolicyInput() FsxDataRepositoryAssociationS3AutoImportPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.internalValue"></a>

```go
func InternalValue() FsxDataRepositoryAssociationS3
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---


### FsxDataRepositoryAssociationTimeoutsOutputReference <a name="FsxDataRepositoryAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxdatarepositoryassociation"

fsxdatarepositoryassociation.NewFsxDataRepositoryAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxDataRepositoryAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



