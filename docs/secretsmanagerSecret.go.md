# `secretsmanagerSecret` Submodule <a name="`secretsmanagerSecret` Submodule" id="@cdktf/provider-aws.secretsmanagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecret <a name="SecretsmanagerSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret aws_secretsmanager_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/secretsmanagersecret"

secretsmanagersecret.NewSecretsmanagerSecret(scope Construct, id *string, config SecretsmanagerSecretConfig) SecretsmanagerSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig">SecretsmanagerSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig">SecretsmanagerSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putReplica">PutReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putRotationRules">PutRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetForceOverwriteReplicaSecret">ResetForceOverwriteReplicaSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRecoveryWindowInDays">ResetRecoveryWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetReplica">ResetReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRotationLambdaArn">ResetRotationLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRotationRules">ResetRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutReplica` <a name="PutReplica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putReplica"></a>

```go
func PutReplica(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putReplica.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRotationRules` <a name="PutRotationRules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putRotationRules"></a>

```go
func PutRotationRules(value SecretsmanagerSecretRotationRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putRotationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetForceOverwriteReplicaSecret` <a name="ResetForceOverwriteReplicaSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetForceOverwriteReplicaSecret"></a>

```go
func ResetForceOverwriteReplicaSecret()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetRecoveryWindowInDays` <a name="ResetRecoveryWindowInDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRecoveryWindowInDays"></a>

```go
func ResetRecoveryWindowInDays()
```

##### `ResetReplica` <a name="ResetReplica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetReplica"></a>

```go
func ResetReplica()
```

##### `ResetRotationLambdaArn` <a name="ResetRotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRotationLambdaArn"></a>

```go
func ResetRotationLambdaArn()
```

##### `ResetRotationRules` <a name="ResetRotationRules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRotationRules"></a>

```go
func ResetRotationRules()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/secretsmanagersecret"

secretsmanagersecret.SecretsmanagerSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/secretsmanagersecret"

secretsmanagersecret.SecretsmanagerSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/secretsmanagersecret"

secretsmanagersecret.SecretsmanagerSecret_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replica">Replica</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList">SecretsmanagerSecretReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationEnabled">RotationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationRules">RotationRules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference">SecretsmanagerSecretRotationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecretInput">ForceOverwriteReplicaSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDaysInput">RecoveryWindowInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replicaInput">ReplicaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationLambdaArnInput">RotationLambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationRulesInput">RotationRulesInput</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecret">ForceOverwriteReplicaSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationLambdaArn">RotationLambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Replica`<sup>Required</sup> <a name="Replica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replica"></a>

```go
func Replica() SecretsmanagerSecretReplicaList
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList">SecretsmanagerSecretReplicaList</a>

---

##### `RotationEnabled`<sup>Required</sup> <a name="RotationEnabled" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationEnabled"></a>

```go
func RotationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RotationRules`<sup>Required</sup> <a name="RotationRules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationRules"></a>

```go
func RotationRules() SecretsmanagerSecretRotationRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference">SecretsmanagerSecretRotationRulesOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ForceOverwriteReplicaSecretInput`<sup>Optional</sup> <a name="ForceOverwriteReplicaSecretInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecretInput"></a>

```go
func ForceOverwriteReplicaSecretInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `RecoveryWindowInDaysInput`<sup>Optional</sup> <a name="RecoveryWindowInDaysInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDaysInput"></a>

```go
func RecoveryWindowInDaysInput() *f64
```

- *Type:* *f64

---

##### `ReplicaInput`<sup>Optional</sup> <a name="ReplicaInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replicaInput"></a>

```go
func ReplicaInput() interface{}
```

- *Type:* interface{}

---

##### `RotationLambdaArnInput`<sup>Optional</sup> <a name="RotationLambdaArnInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationLambdaArnInput"></a>

```go
func RotationLambdaArnInput() *string
```

- *Type:* *string

---

##### `RotationRulesInput`<sup>Optional</sup> <a name="RotationRulesInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationRulesInput"></a>

```go
func RotationRulesInput() SecretsmanagerSecretRotationRules
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForceOverwriteReplicaSecret`<sup>Required</sup> <a name="ForceOverwriteReplicaSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecret"></a>

```go
func ForceOverwriteReplicaSecret() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `RecoveryWindowInDays`<sup>Required</sup> <a name="RecoveryWindowInDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDays"></a>

```go
func RecoveryWindowInDays() *f64
```

- *Type:* *f64

---

##### `RotationLambdaArn`<sup>Required</sup> <a name="RotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationLambdaArn"></a>

```go
func RotationLambdaArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretConfig <a name="SecretsmanagerSecretConfig" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/secretsmanagersecret"

&secretsmanagersecret.SecretsmanagerSecretConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	ForceOverwriteReplicaSecret: interface{},
	Id: *string,
	KmsKeyId: *string,
	Name: *string,
	NamePrefix: *string,
	Policy: *string,
	RecoveryWindowInDays: *f64,
	Replica: interface{},
	RotationLambdaArn: *string,
	RotationRules: github.com/cdktf/cdktf-provider-aws-go/aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#description SecretsmanagerSecret#description}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forceOverwriteReplicaSecret">ForceOverwriteReplicaSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#id SecretsmanagerSecret#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name SecretsmanagerSecret#name}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#policy SecretsmanagerSecret#policy}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replica">Replica</a></code> | <code>interface{}</code> | replica block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.rotationLambdaArn">RotationLambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#rotation_lambda_arn SecretsmanagerSecret#rotation_lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.rotationRules">RotationRules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a></code> | rotation_rules block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags SecretsmanagerSecret#tags}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#description SecretsmanagerSecret#description}.

---

##### `ForceOverwriteReplicaSecret`<sup>Optional</sup> <a name="ForceOverwriteReplicaSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forceOverwriteReplicaSecret"></a>

```go
ForceOverwriteReplicaSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#id SecretsmanagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name SecretsmanagerSecret#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#policy SecretsmanagerSecret#policy}.

---

##### `RecoveryWindowInDays`<sup>Optional</sup> <a name="RecoveryWindowInDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.recoveryWindowInDays"></a>

```go
RecoveryWindowInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}.

---

##### `Replica`<sup>Optional</sup> <a name="Replica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replica"></a>

```go
Replica interface{}
```

- *Type:* interface{}

replica block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#replica SecretsmanagerSecret#replica}

---

##### `RotationLambdaArn`<sup>Optional</sup> <a name="RotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.rotationLambdaArn"></a>

```go
RotationLambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#rotation_lambda_arn SecretsmanagerSecret#rotation_lambda_arn}.

---

##### `RotationRules`<sup>Optional</sup> <a name="RotationRules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.rotationRules"></a>

```go
RotationRules SecretsmanagerSecretRotationRules
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a>

rotation_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#rotation_rules SecretsmanagerSecret#rotation_rules}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags SecretsmanagerSecret#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}.

---

### SecretsmanagerSecretReplica <a name="SecretsmanagerSecretReplica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/secretsmanagersecret"

&secretsmanagersecret.SecretsmanagerSecretReplica {
	Region: *string,
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#region SecretsmanagerSecret#region}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#region SecretsmanagerSecret#region}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}.

---

### SecretsmanagerSecretRotationRules <a name="SecretsmanagerSecretRotationRules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/secretsmanagersecret"

&secretsmanagersecret.SecretsmanagerSecretRotationRules {
	AutomaticallyAfterDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules.property.automaticallyAfterDays">AutomaticallyAfterDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#automatically_after_days SecretsmanagerSecret#automatically_after_days}. |

---

##### `AutomaticallyAfterDays`<sup>Required</sup> <a name="AutomaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules.property.automaticallyAfterDays"></a>

```go
AutomaticallyAfterDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#automatically_after_days SecretsmanagerSecret#automatically_after_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerSecretReplicaList <a name="SecretsmanagerSecretReplicaList" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/secretsmanagersecret"

secretsmanagersecret.NewSecretsmanagerSecretReplicaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretsmanagerSecretReplicaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.get"></a>

```go
func Get(index *f64) SecretsmanagerSecretReplicaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretsmanagerSecretReplicaOutputReference <a name="SecretsmanagerSecretReplicaOutputReference" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/secretsmanagersecret"

secretsmanagersecret.NewSecretsmanagerSecretReplicaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretsmanagerSecretReplicaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.lastAccessedDate">LastAccessedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastAccessedDate`<sup>Required</sup> <a name="LastAccessedDate" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.lastAccessedDate"></a>

```go
func LastAccessedDate() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretsmanagerSecretRotationRulesOutputReference <a name="SecretsmanagerSecretRotationRulesOutputReference" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/secretsmanagersecret"

secretsmanagersecret.NewSecretsmanagerSecretRotationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretsmanagerSecretRotationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDaysInput">AutomaticallyAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDays">AutomaticallyAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticallyAfterDaysInput`<sup>Optional</sup> <a name="AutomaticallyAfterDaysInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDaysInput"></a>

```go
func AutomaticallyAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `AutomaticallyAfterDays`<sup>Required</sup> <a name="AutomaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```go
func AutomaticallyAfterDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretsmanagerSecretRotationRules
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a>

---



