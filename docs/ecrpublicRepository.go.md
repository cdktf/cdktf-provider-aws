# `ecrpublicRepository` Submodule <a name="`ecrpublicRepository` Submodule" id="@cdktf/provider-aws.ecrpublicRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrpublicRepository <a name="EcrpublicRepository" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository aws_ecrpublic_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpublicrepository"

ecrpublicrepository.NewEcrpublicRepository(scope Construct, id *string, config EcrpublicRepositoryConfig) EcrpublicRepository
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig">EcrpublicRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig">EcrpublicRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData">PutCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetCatalogData">ResetCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCatalogData` <a name="PutCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData"></a>

```go
func PutCatalogData(value EcrpublicRepositoryCatalogData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts"></a>

```go
func PutTimeouts(value EcrpublicRepositoryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>

---

##### `ResetCatalogData` <a name="ResetCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetCatalogData"></a>

```go
func ResetCatalogData()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpublicrepository"

ecrpublicrepository.EcrpublicRepository_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpublicrepository"

ecrpublicrepository.EcrpublicRepository_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpublicrepository"

ecrpublicrepository.EcrpublicRepository_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogData">CatalogData</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference">EcrpublicRepositoryCatalogDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.registryId">RegistryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryUri">RepositoryUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference">EcrpublicRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogDataInput">CatalogDataInput</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CatalogData`<sup>Required</sup> <a name="CatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogData"></a>

```go
func CatalogData() EcrpublicRepositoryCatalogDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference">EcrpublicRepositoryCatalogDataOutputReference</a>

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.registryId"></a>

```go
func RegistryId() *string
```

- *Type:* *string

---

##### `RepositoryUri`<sup>Required</sup> <a name="RepositoryUri" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryUri"></a>

```go
func RepositoryUri() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeouts"></a>

```go
func Timeouts() EcrpublicRepositoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference">EcrpublicRepositoryTimeoutsOutputReference</a>

---

##### `CatalogDataInput`<sup>Optional</sup> <a name="CatalogDataInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogDataInput"></a>

```go
func CatalogDataInput() EcrpublicRepositoryCatalogData
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryNameInput"></a>

```go
func RepositoryNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrpublicRepositoryCatalogData <a name="EcrpublicRepositoryCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpublicrepository"

&ecrpublicrepository.EcrpublicRepositoryCatalogData {
	AboutText: *string,
	Architectures: *[]*string,
	Description: *string,
	LogoImageBlob: *string,
	OperatingSystems: *[]*string,
	UsageText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.aboutText">AboutText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#about_text EcrpublicRepository#about_text}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.architectures">Architectures</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#architectures EcrpublicRepository#architectures}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#description EcrpublicRepository#description}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.logoImageBlob">LogoImageBlob</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.operatingSystems">OperatingSystems</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.usageText">UsageText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}. |

---

##### `AboutText`<sup>Optional</sup> <a name="AboutText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.aboutText"></a>

```go
AboutText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#about_text EcrpublicRepository#about_text}.

---

##### `Architectures`<sup>Optional</sup> <a name="Architectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.architectures"></a>

```go
Architectures *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#architectures EcrpublicRepository#architectures}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#description EcrpublicRepository#description}.

---

##### `LogoImageBlob`<sup>Optional</sup> <a name="LogoImageBlob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.logoImageBlob"></a>

```go
LogoImageBlob *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}.

---

##### `OperatingSystems`<sup>Optional</sup> <a name="OperatingSystems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.operatingSystems"></a>

```go
OperatingSystems *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}.

---

##### `UsageText`<sup>Optional</sup> <a name="UsageText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.usageText"></a>

```go
UsageText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}.

---

### EcrpublicRepositoryConfig <a name="EcrpublicRepositoryConfig" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpublicrepository"

&ecrpublicrepository.EcrpublicRepositoryConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RepositoryName: *string,
	CatalogData: github.com/cdktf/cdktf-provider-aws-go/aws.ecrpublicRepository.EcrpublicRepositoryCatalogData,
	ForceDestroy: interface{},
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.ecrpublicRepository.EcrpublicRepositoryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.catalogData">CatalogData</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | catalog_data block. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.repositoryName"></a>

```go
RepositoryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}.

---

##### `CatalogData`<sup>Optional</sup> <a name="CatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.catalogData"></a>

```go
CatalogData EcrpublicRepositoryCatalogData
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

catalog_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#catalog_data EcrpublicRepository#catalog_data}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.timeouts"></a>

```go
Timeouts EcrpublicRepositoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#timeouts EcrpublicRepository#timeouts}

---

### EcrpublicRepositoryTimeouts <a name="EcrpublicRepositoryTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpublicrepository"

&ecrpublicrepository.EcrpublicRepositoryTimeouts {
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#delete EcrpublicRepository#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#delete EcrpublicRepository#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrpublicRepositoryCatalogDataOutputReference <a name="EcrpublicRepositoryCatalogDataOutputReference" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpublicrepository"

ecrpublicrepository.NewEcrpublicRepositoryCatalogDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcrpublicRepositoryCatalogDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetAboutText">ResetAboutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetArchitectures">ResetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetLogoImageBlob">ResetLogoImageBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetOperatingSystems">ResetOperatingSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetUsageText">ResetUsageText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAboutText` <a name="ResetAboutText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetAboutText"></a>

```go
func ResetAboutText()
```

##### `ResetArchitectures` <a name="ResetArchitectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetArchitectures"></a>

```go
func ResetArchitectures()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLogoImageBlob` <a name="ResetLogoImageBlob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetLogoImageBlob"></a>

```go
func ResetLogoImageBlob()
```

##### `ResetOperatingSystems` <a name="ResetOperatingSystems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetOperatingSystems"></a>

```go
func ResetOperatingSystems()
```

##### `ResetUsageText` <a name="ResetUsageText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetUsageText"></a>

```go
func ResetUsageText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutTextInput">AboutTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architecturesInput">ArchitecturesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlobInput">LogoImageBlobInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystemsInput">OperatingSystemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageTextInput">UsageTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutText">AboutText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architectures">Architectures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlob">LogoImageBlob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystems">OperatingSystems</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageText">UsageText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AboutTextInput`<sup>Optional</sup> <a name="AboutTextInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutTextInput"></a>

```go
func AboutTextInput() *string
```

- *Type:* *string

---

##### `ArchitecturesInput`<sup>Optional</sup> <a name="ArchitecturesInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architecturesInput"></a>

```go
func ArchitecturesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `LogoImageBlobInput`<sup>Optional</sup> <a name="LogoImageBlobInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlobInput"></a>

```go
func LogoImageBlobInput() *string
```

- *Type:* *string

---

##### `OperatingSystemsInput`<sup>Optional</sup> <a name="OperatingSystemsInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystemsInput"></a>

```go
func OperatingSystemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsageTextInput`<sup>Optional</sup> <a name="UsageTextInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageTextInput"></a>

```go
func UsageTextInput() *string
```

- *Type:* *string

---

##### `AboutText`<sup>Required</sup> <a name="AboutText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutText"></a>

```go
func AboutText() *string
```

- *Type:* *string

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architectures"></a>

```go
func Architectures() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LogoImageBlob`<sup>Required</sup> <a name="LogoImageBlob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlob"></a>

```go
func LogoImageBlob() *string
```

- *Type:* *string

---

##### `OperatingSystems`<sup>Required</sup> <a name="OperatingSystems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystems"></a>

```go
func OperatingSystems() *[]*string
```

- *Type:* *[]*string

---

##### `UsageText`<sup>Required</sup> <a name="UsageText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageText"></a>

```go
func UsageText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.internalValue"></a>

```go
func InternalValue() EcrpublicRepositoryCatalogData
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---


### EcrpublicRepositoryTimeoutsOutputReference <a name="EcrpublicRepositoryTimeoutsOutputReference" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ecrpublicrepository"

ecrpublicrepository.NewEcrpublicRepositoryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcrpublicRepositoryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



