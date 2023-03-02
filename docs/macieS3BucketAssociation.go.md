# `macieS3BucketAssociation` Submodule <a name="`macieS3BucketAssociation` Submodule" id="@cdktf/provider-aws.macieS3BucketAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MacieS3BucketAssociation <a name="MacieS3BucketAssociation" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association aws_macie_s3_bucket_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macies3bucketassociation"

macies3bucketassociation.NewMacieS3BucketAssociation(scope Construct, id *string, config MacieS3BucketAssociationConfig) MacieS3BucketAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig">MacieS3BucketAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig">MacieS3BucketAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.putClassificationType">PutClassificationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetClassificationType">ResetClassificationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetMemberAccountId">ResetMemberAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutClassificationType` <a name="PutClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.putClassificationType"></a>

```go
func PutClassificationType(value MacieS3BucketAssociationClassificationType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.putClassificationType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

---

##### `ResetClassificationType` <a name="ResetClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetClassificationType"></a>

```go
func ResetClassificationType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetMemberAccountId` <a name="ResetMemberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetMemberAccountId"></a>

```go
func ResetMemberAccountId()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.resetPrefix"></a>

```go
func ResetPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macies3bucketassociation"

macies3bucketassociation.MacieS3BucketAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macies3bucketassociation"

macies3bucketassociation.MacieS3BucketAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macies3bucketassociation"

macies3bucketassociation.MacieS3BucketAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationType">ClassificationType</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference">MacieS3BucketAssociationClassificationTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationTypeInput">ClassificationTypeInput</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountIdInput">MemberAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountId">MemberAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClassificationType`<sup>Required</sup> <a name="ClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationType"></a>

```go
func ClassificationType() MacieS3BucketAssociationClassificationTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference">MacieS3BucketAssociationClassificationTypeOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `ClassificationTypeInput`<sup>Optional</sup> <a name="ClassificationTypeInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.classificationTypeInput"></a>

```go
func ClassificationTypeInput() MacieS3BucketAssociationClassificationType
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberAccountIdInput`<sup>Optional</sup> <a name="MemberAccountIdInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountIdInput"></a>

```go
func MemberAccountIdInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemberAccountId`<sup>Required</sup> <a name="MemberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.memberAccountId"></a>

```go
func MemberAccountId() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MacieS3BucketAssociationClassificationType <a name="MacieS3BucketAssociationClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macies3bucketassociation"

&macies3bucketassociation.MacieS3BucketAssociationClassificationType {
	Continuous: *string,
	OneTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.continuous">Continuous</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#continuous MacieS3BucketAssociation#continuous}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.oneTime">OneTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#one_time MacieS3BucketAssociation#one_time}. |

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.continuous"></a>

```go
Continuous *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#continuous MacieS3BucketAssociation#continuous}.

---

##### `OneTime`<sup>Optional</sup> <a name="OneTime" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType.property.oneTime"></a>

```go
OneTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#one_time MacieS3BucketAssociation#one_time}.

---

### MacieS3BucketAssociationConfig <a name="MacieS3BucketAssociationConfig" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macies3bucketassociation"

&macies3bucketassociation.MacieS3BucketAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BucketName: *string,
	ClassificationType: github.com/cdktf/cdktf-provider-aws-go/aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType,
	Id: *string,
	MemberAccountId: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#bucket_name MacieS3BucketAssociation#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.classificationType">ClassificationType</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | classification_type block. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#id MacieS3BucketAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.memberAccountId">MemberAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#member_account_id MacieS3BucketAssociation#member_account_id}. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#prefix MacieS3BucketAssociation#prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#bucket_name MacieS3BucketAssociation#bucket_name}.

---

##### `ClassificationType`<sup>Optional</sup> <a name="ClassificationType" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.classificationType"></a>

```go
ClassificationType MacieS3BucketAssociationClassificationType
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

classification_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#classification_type MacieS3BucketAssociation#classification_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#id MacieS3BucketAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemberAccountId`<sup>Optional</sup> <a name="MemberAccountId" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.memberAccountId"></a>

```go
MemberAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#member_account_id MacieS3BucketAssociation#member_account_id}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie_s3_bucket_association#prefix MacieS3BucketAssociation#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### MacieS3BucketAssociationClassificationTypeOutputReference <a name="MacieS3BucketAssociationClassificationTypeOutputReference" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macies3bucketassociation"

macies3bucketassociation.NewMacieS3BucketAssociationClassificationTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MacieS3BucketAssociationClassificationTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetOneTime">ResetOneTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetContinuous"></a>

```go
func ResetContinuous()
```

##### `ResetOneTime` <a name="ResetOneTime" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.resetOneTime"></a>

```go
func ResetOneTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuousInput">ContinuousInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTimeInput">OneTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuous">Continuous</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTime">OneTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuousInput"></a>

```go
func ContinuousInput() *string
```

- *Type:* *string

---

##### `OneTimeInput`<sup>Optional</sup> <a name="OneTimeInput" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTimeInput"></a>

```go
func OneTimeInput() *string
```

- *Type:* *string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.continuous"></a>

```go
func Continuous() *string
```

- *Type:* *string

---

##### `OneTime`<sup>Required</sup> <a name="OneTime" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.oneTime"></a>

```go
func OneTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() MacieS3BucketAssociationClassificationType
```

- *Type:* <a href="#@cdktf/provider-aws.macieS3BucketAssociation.MacieS3BucketAssociationClassificationType">MacieS3BucketAssociationClassificationType</a>

---



