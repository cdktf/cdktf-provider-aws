# `codegurureviewerRepositoryAssociation` Submodule <a name="`codegurureviewerRepositoryAssociation` Submodule" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodegurureviewerRepositoryAssociation <a name="CodegurureviewerRepositoryAssociation" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association aws_codegurureviewer_repository_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.NewCodegurureviewerRepositoryAssociation(scope Construct, id *string, config CodegurureviewerRepositoryAssociationConfig) CodegurureviewerRepositoryAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig">CodegurureviewerRepositoryAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig">CodegurureviewerRepositoryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails">PutKmsKeyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository">PutRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetKmsKeyDetails">ResetKmsKeyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutKmsKeyDetails` <a name="PutKmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails"></a>

```go
func PutKmsKeyDetails(value CodegurureviewerRepositoryAssociationKmsKeyDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putKmsKeyDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

---

##### `PutRepository` <a name="PutRepository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository"></a>

```go
func PutRepository(value CodegurureviewerRepositoryAssociationRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts"></a>

```go
func PutTimeouts(value CodegurureviewerRepositoryAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyDetails` <a name="ResetKmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetKmsKeyDetails"></a>

```go
func ResetKmsKeyDetails()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.associationId">AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArn">ConnectionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetails">KmsKeyDetails</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference">CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.providerType">ProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repository">Repository</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference">CodegurureviewerRepositoryAssociationRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.s3RepositoryDetails">S3RepositoryDetails</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.stateReason">StateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference">CodegurureviewerRepositoryAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetailsInput">KmsKeyDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repositoryInput">RepositoryInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.associationId"></a>

```go
func AssociationId() *string
```

- *Type:* *string

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.connectionArn"></a>

```go
func ConnectionArn() *string
```

- *Type:* *string

---

##### `KmsKeyDetails`<sup>Required</sup> <a name="KmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetails"></a>

```go
func KmsKeyDetails() CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference">CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.providerType"></a>

```go
func ProviderType() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repository"></a>

```go
func Repository() CodegurureviewerRepositoryAssociationRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference">CodegurureviewerRepositoryAssociationRepositoryOutputReference</a>

---

##### `S3RepositoryDetails`<sup>Required</sup> <a name="S3RepositoryDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.s3RepositoryDetails"></a>

```go
func S3RepositoryDetails() CodegurureviewerRepositoryAssociationS3RepositoryDetailsList
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.stateReason"></a>

```go
func StateReason() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeouts"></a>

```go
func Timeouts() CodegurureviewerRepositoryAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference">CodegurureviewerRepositoryAssociationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyDetailsInput`<sup>Optional</sup> <a name="KmsKeyDetailsInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.kmsKeyDetailsInput"></a>

```go
func KmsKeyDetailsInput() CodegurureviewerRepositoryAssociationKmsKeyDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.repositoryInput"></a>

```go
func RepositoryInput() CodegurureviewerRepositoryAssociationRepository
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodegurureviewerRepositoryAssociationConfig <a name="CodegurureviewerRepositoryAssociationConfig" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

&codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Repository: github.com/cdktf/cdktf-provider-aws-go/aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository,
	Id: *string,
	KmsKeyDetails: github.com/cdktf/cdktf-provider-aws-go/aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.repository">Repository</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | repository block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#id CodegurureviewerRepositoryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.kmsKeyDetails">KmsKeyDetails</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | kms_key_details block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#tags_all CodegurureviewerRepositoryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.repository"></a>

```go
Repository CodegurureviewerRepositoryAssociationRepository
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#repository CodegurureviewerRepositoryAssociation#repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#id CodegurureviewerRepositoryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyDetails`<sup>Optional</sup> <a name="KmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.kmsKeyDetails"></a>

```go
KmsKeyDetails CodegurureviewerRepositoryAssociationKmsKeyDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

kms_key_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#kms_key_details CodegurureviewerRepositoryAssociation#kms_key_details}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#tags CodegurureviewerRepositoryAssociation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#tags_all CodegurureviewerRepositoryAssociation#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationConfig.property.timeouts"></a>

```go
Timeouts CodegurureviewerRepositoryAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts">CodegurureviewerRepositoryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#timeouts CodegurureviewerRepositoryAssociation#timeouts}

---

### CodegurureviewerRepositoryAssociationKmsKeyDetails <a name="CodegurureviewerRepositoryAssociationKmsKeyDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

&codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociationKmsKeyDetails {
	EncryptionOption: *string,
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.encryptionOption">EncryptionOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#encryption_option CodegurureviewerRepositoryAssociation#encryption_option}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#kms_key_id CodegurureviewerRepositoryAssociation#kms_key_id}. |

---

##### `EncryptionOption`<sup>Optional</sup> <a name="EncryptionOption" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.encryptionOption"></a>

```go
EncryptionOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#encryption_option CodegurureviewerRepositoryAssociation#encryption_option}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#kms_key_id CodegurureviewerRepositoryAssociation#kms_key_id}.

---

### CodegurureviewerRepositoryAssociationRepository <a name="CodegurureviewerRepositoryAssociationRepository" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

&codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociationRepository {
	Bitbucket: github.com/cdktf/cdktf-provider-aws-go/aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket,
	Codecommit: github.com/cdktf/cdktf-provider-aws-go/aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit,
	GithubEnterpriseServer: github.com/cdktf/cdktf-provider-aws-go/aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer,
	S3Bucket: github.com/cdktf/cdktf-provider-aws-go/aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.bitbucket">Bitbucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a></code> | bitbucket block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.codecommit">Codecommit</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a></code> | codecommit block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.githubEnterpriseServer">GithubEnterpriseServer</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a></code> | github_enterprise_server block. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.s3Bucket">S3Bucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a></code> | s3_bucket block. |

---

##### `Bitbucket`<sup>Optional</sup> <a name="Bitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.bitbucket"></a>

```go
Bitbucket CodegurureviewerRepositoryAssociationRepositoryBitbucket
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

bitbucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#bitbucket CodegurureviewerRepositoryAssociation#bitbucket}

---

##### `Codecommit`<sup>Optional</sup> <a name="Codecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.codecommit"></a>

```go
Codecommit CodegurureviewerRepositoryAssociationRepositoryCodecommit
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

codecommit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#codecommit CodegurureviewerRepositoryAssociation#codecommit}

---

##### `GithubEnterpriseServer`<sup>Optional</sup> <a name="GithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.githubEnterpriseServer"></a>

```go
GithubEnterpriseServer CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

github_enterprise_server block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#github_enterprise_server CodegurureviewerRepositoryAssociation#github_enterprise_server}

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository.property.s3Bucket"></a>

```go
S3Bucket CodegurureviewerRepositoryAssociationRepositoryS3Bucket
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

s3_bucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#s3_bucket CodegurureviewerRepositoryAssociation#s3_bucket}

---

### CodegurureviewerRepositoryAssociationRepositoryBitbucket <a name="CodegurureviewerRepositoryAssociationRepositoryBitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

&codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket {
	ConnectionArn: *string,
	Name: *string,
	Owner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.connectionArn">ConnectionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}. |

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.connectionArn"></a>

```go
ConnectionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}.

---

### CodegurureviewerRepositoryAssociationRepositoryCodecommit <a name="CodegurureviewerRepositoryAssociationRepositoryCodecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

&codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

### CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer <a name="CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

&codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer {
	ConnectionArn: *string,
	Name: *string,
	Owner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.connectionArn">ConnectionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}. |

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.connectionArn"></a>

```go
ConnectionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#connection_arn CodegurureviewerRepositoryAssociation#connection_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#owner CodegurureviewerRepositoryAssociation#owner}.

---

### CodegurureviewerRepositoryAssociationRepositoryS3Bucket <a name="CodegurureviewerRepositoryAssociationRepositoryS3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

&codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket {
	BucketName: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#bucket_name CodegurureviewerRepositoryAssociation#bucket_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#name CodegurureviewerRepositoryAssociation#name}.

---

### CodegurureviewerRepositoryAssociationS3RepositoryDetails <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetails" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

&codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails {

}
```


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

&codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts {

}
```


### CodegurureviewerRepositoryAssociationTimeouts <a name="CodegurureviewerRepositoryAssociationTimeouts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

&codegurureviewerrepositoryassociation.CodegurureviewerRepositoryAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#create CodegurureviewerRepositoryAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#delete CodegurureviewerRepositoryAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#update CodegurureviewerRepositoryAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#create CodegurureviewerRepositoryAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#delete CodegurureviewerRepositoryAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codegurureviewer_repository_association#update CodegurureviewerRepositoryAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference <a name="CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.NewCodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetEncryptionOption">ResetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionOption` <a name="ResetEncryptionOption" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetEncryptionOption"></a>

```go
func ResetEncryptionOption()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOptionInput">EncryptionOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOption">EncryptionOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionOptionInput`<sup>Optional</sup> <a name="EncryptionOptionInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOptionInput"></a>

```go
func EncryptionOptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `EncryptionOption`<sup>Required</sup> <a name="EncryptionOption" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.encryptionOption"></a>

```go
func EncryptionOption() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CodegurureviewerRepositoryAssociationKmsKeyDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationKmsKeyDetails">CodegurureviewerRepositoryAssociationKmsKeyDetails</a>

---


### CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.NewCodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArnInput">ConnectionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArn">ConnectionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionArnInput`<sup>Optional</sup> <a name="ConnectionArnInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArnInput"></a>

```go
func ConnectionArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.connectionArn"></a>

```go
func ConnectionArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference.property.internalValue"></a>

```go
func InternalValue() CodegurureviewerRepositoryAssociationRepositoryBitbucket
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

---


### CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.NewCodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference.property.internalValue"></a>

```go
func InternalValue() CodegurureviewerRepositoryAssociationRepositoryCodecommit
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

---


### CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.NewCodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArnInput">ConnectionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArn">ConnectionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionArnInput`<sup>Optional</sup> <a name="ConnectionArnInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArnInput"></a>

```go
func ConnectionArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.connectionArn"></a>

```go
func ConnectionArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference.property.internalValue"></a>

```go
func InternalValue() CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

---


### CodegurureviewerRepositoryAssociationRepositoryOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.NewCodegurureviewerRepositoryAssociationRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodegurureviewerRepositoryAssociationRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket">PutBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putCodecommit">PutCodecommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer">PutGithubEnterpriseServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket">PutS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetBitbucket">ResetBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetCodecommit">ResetCodecommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetGithubEnterpriseServer">ResetGithubEnterpriseServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBitbucket` <a name="PutBitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket"></a>

```go
func PutBitbucket(value CodegurureviewerRepositoryAssociationRepositoryBitbucket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putBitbucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

---

##### `PutCodecommit` <a name="PutCodecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putCodecommit"></a>

```go
func PutCodecommit(value CodegurureviewerRepositoryAssociationRepositoryCodecommit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putCodecommit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

---

##### `PutGithubEnterpriseServer` <a name="PutGithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer"></a>

```go
func PutGithubEnterpriseServer(value CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putGithubEnterpriseServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

---

##### `PutS3Bucket` <a name="PutS3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket"></a>

```go
func PutS3Bucket(value CodegurureviewerRepositoryAssociationRepositoryS3Bucket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.putS3Bucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

---

##### `ResetBitbucket` <a name="ResetBitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetBitbucket"></a>

```go
func ResetBitbucket()
```

##### `ResetCodecommit` <a name="ResetCodecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetCodecommit"></a>

```go
func ResetCodecommit()
```

##### `ResetGithubEnterpriseServer` <a name="ResetGithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetGithubEnterpriseServer"></a>

```go
func ResetGithubEnterpriseServer()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.resetS3Bucket"></a>

```go
func ResetS3Bucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucket">Bitbucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommit">Codecommit</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference">CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServer">GithubEnterpriseServer</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3Bucket">S3Bucket</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucketInput">BitbucketInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommitInput">CodecommitInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServerInput">GithubEnterpriseServerInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bitbucket`<sup>Required</sup> <a name="Bitbucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucket"></a>

```go
func Bitbucket() CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryBitbucketOutputReference</a>

---

##### `Codecommit`<sup>Required</sup> <a name="Codecommit" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommit"></a>

```go
func Codecommit() CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference">CodegurureviewerRepositoryAssociationRepositoryCodecommitOutputReference</a>

---

##### `GithubEnterpriseServer`<sup>Required</sup> <a name="GithubEnterpriseServer" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServer"></a>

```go
func GithubEnterpriseServer() CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServerOutputReference</a>

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference">CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference</a>

---

##### `BitbucketInput`<sup>Optional</sup> <a name="BitbucketInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.bitbucketInput"></a>

```go
func BitbucketInput() CodegurureviewerRepositoryAssociationRepositoryBitbucket
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryBitbucket">CodegurureviewerRepositoryAssociationRepositoryBitbucket</a>

---

##### `CodecommitInput`<sup>Optional</sup> <a name="CodecommitInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.codecommitInput"></a>

```go
func CodecommitInput() CodegurureviewerRepositoryAssociationRepositoryCodecommit
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryCodecommit">CodegurureviewerRepositoryAssociationRepositoryCodecommit</a>

---

##### `GithubEnterpriseServerInput`<sup>Optional</sup> <a name="GithubEnterpriseServerInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.githubEnterpriseServerInput"></a>

```go
func GithubEnterpriseServerInput() CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer">CodegurureviewerRepositoryAssociationRepositoryGithubEnterpriseServer</a>

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() CodegurureviewerRepositoryAssociationRepositoryS3Bucket
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() CodegurureviewerRepositoryAssociationRepository
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepository">CodegurureviewerRepositoryAssociationRepository</a>

---


### CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference <a name="CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.NewCodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3BucketOutputReference.property.internalValue"></a>

```go
func InternalValue() CodegurureviewerRepositoryAssociationRepositoryS3Bucket
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationRepositoryS3Bucket">CodegurureviewerRepositoryAssociationRepositoryS3Bucket</a>

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.NewCodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.get"></a>

```go
func Get(index *f64) CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.NewCodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.buildArtifactsObjectKey">BuildArtifactsObjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.sourceCodeArtifactsObjectKey">SourceCodeArtifactsObjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildArtifactsObjectKey`<sup>Required</sup> <a name="BuildArtifactsObjectKey" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.buildArtifactsObjectKey"></a>

```go
func BuildArtifactsObjectKey() *string
```

- *Type:* *string

---

##### `SourceCodeArtifactsObjectKey`<sup>Required</sup> <a name="SourceCodeArtifactsObjectKey" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.sourceCodeArtifactsObjectKey"></a>

```go
func SourceCodeArtifactsObjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifacts</a>

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsList <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsList" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.NewCodegurureviewerRepositoryAssociationS3RepositoryDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodegurureviewerRepositoryAssociationS3RepositoryDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.get"></a>

```go
func Get(index *f64) CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference <a name="CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.NewCodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.codeArtifacts">CodeArtifacts</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails">CodegurureviewerRepositoryAssociationS3RepositoryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CodeArtifacts`<sup>Required</sup> <a name="CodeArtifacts" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.codeArtifacts"></a>

```go
func CodeArtifacts() CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList">CodegurureviewerRepositoryAssociationS3RepositoryDetailsCodeArtifactsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CodegurureviewerRepositoryAssociationS3RepositoryDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationS3RepositoryDetails">CodegurureviewerRepositoryAssociationS3RepositoryDetails</a>

---


### CodegurureviewerRepositoryAssociationTimeoutsOutputReference <a name="CodegurureviewerRepositoryAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codegurureviewerrepositoryassociation"

codegurureviewerrepositoryassociation.NewCodegurureviewerRepositoryAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodegurureviewerRepositoryAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codegurureviewerRepositoryAssociation.CodegurureviewerRepositoryAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



