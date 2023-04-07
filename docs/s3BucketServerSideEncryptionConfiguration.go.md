# `s3BucketServerSideEncryptionConfiguration` Submodule <a name="`s3BucketServerSideEncryptionConfiguration` Submodule" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketServerSideEncryptionConfigurationA <a name="S3BucketServerSideEncryptionConfigurationA" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration aws_s3_bucket_server_side_encryption_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketserversideencryptionconfiguration"

s3bucketserversideencryptionconfiguration.NewS3BucketServerSideEncryptionConfigurationA(scope Construct, id *string, config S3BucketServerSideEncryptionConfigurationAConfig) S3BucketServerSideEncryptionConfigurationA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig">S3BucketServerSideEncryptionConfigurationAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig">S3BucketServerSideEncryptionConfigurationAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketserversideencryptionconfiguration"

s3bucketserversideencryptionconfiguration.S3BucketServerSideEncryptionConfigurationA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketserversideencryptionconfiguration"

s3bucketserversideencryptionconfiguration.S3BucketServerSideEncryptionConfigurationA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketserversideencryptionconfiguration"

s3bucketserversideencryptionconfiguration.S3BucketServerSideEncryptionConfigurationA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList">S3BucketServerSideEncryptionConfigurationRuleAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.rule"></a>

```go
func Rule() S3BucketServerSideEncryptionConfigurationRuleAList
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList">S3BucketServerSideEncryptionConfigurationRuleAList</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketServerSideEncryptionConfigurationAConfig <a name="S3BucketServerSideEncryptionConfigurationAConfig" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketserversideencryptionconfiguration"

&s3bucketserversideencryptionconfiguration.S3BucketServerSideEncryptionConfigurationAConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Rule: interface{},
	ExpectedBucketOwner: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#bucket S3BucketServerSideEncryptionConfigurationA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#expected_bucket_owner S3BucketServerSideEncryptionConfigurationA#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#id S3BucketServerSideEncryptionConfigurationA#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#bucket S3BucketServerSideEncryptionConfigurationA#bucket}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#rule S3BucketServerSideEncryptionConfigurationA#rule}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#expected_bucket_owner S3BucketServerSideEncryptionConfigurationA#expected_bucket_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#id S3BucketServerSideEncryptionConfigurationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### S3BucketServerSideEncryptionConfigurationRuleA <a name="S3BucketServerSideEncryptionConfigurationRuleA" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketserversideencryptionconfiguration"

&s3bucketserversideencryptionconfiguration.S3BucketServerSideEncryptionConfigurationRuleA {
	ApplyServerSideEncryptionByDefault: github.com/cdktf/cdktf-provider-aws-go/aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA,
	BucketKeyEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleA.property.applyServerSideEncryptionByDefault">ApplyServerSideEncryptionByDefault</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA</a></code> | apply_server_side_encryption_by_default block. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleA.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#bucket_key_enabled S3BucketServerSideEncryptionConfigurationA#bucket_key_enabled}. |

---

##### `ApplyServerSideEncryptionByDefault`<sup>Optional</sup> <a name="ApplyServerSideEncryptionByDefault" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleA.property.applyServerSideEncryptionByDefault"></a>

```go
ApplyServerSideEncryptionByDefault S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA</a>

apply_server_side_encryption_by_default block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#apply_server_side_encryption_by_default S3BucketServerSideEncryptionConfigurationA#apply_server_side_encryption_by_default}

---

##### `BucketKeyEnabled`<sup>Optional</sup> <a name="BucketKeyEnabled" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleA.property.bucketKeyEnabled"></a>

```go
BucketKeyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#bucket_key_enabled S3BucketServerSideEncryptionConfigurationA#bucket_key_enabled}.

---

### S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA <a name="S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketserversideencryptionconfiguration"

&s3bucketserversideencryptionconfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA {
	SseAlgorithm: *string,
	KmsMasterKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA.property.sseAlgorithm">SseAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#sse_algorithm S3BucketServerSideEncryptionConfigurationA#sse_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#kms_master_key_id S3BucketServerSideEncryptionConfigurationA#kms_master_key_id}. |

---

##### `SseAlgorithm`<sup>Required</sup> <a name="SseAlgorithm" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA.property.sseAlgorithm"></a>

```go
SseAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#sse_algorithm S3BucketServerSideEncryptionConfigurationA#sse_algorithm}.

---

##### `KmsMasterKeyId`<sup>Optional</sup> <a name="KmsMasterKeyId" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA.property.kmsMasterKeyId"></a>

```go
KmsMasterKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_server_side_encryption_configuration#kms_master_key_id S3BucketServerSideEncryptionConfigurationA#kms_master_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketServerSideEncryptionConfigurationRuleAList <a name="S3BucketServerSideEncryptionConfigurationRuleAList" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketserversideencryptionconfiguration"

s3bucketserversideencryptionconfiguration.NewS3BucketServerSideEncryptionConfigurationRuleAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3BucketServerSideEncryptionConfigurationRuleAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.get"></a>

```go
func Get(index *f64) S3BucketServerSideEncryptionConfigurationRuleAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3BucketServerSideEncryptionConfigurationRuleAOutputReference <a name="S3BucketServerSideEncryptionConfigurationRuleAOutputReference" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketserversideencryptionconfiguration"

s3bucketserversideencryptionconfiguration.NewS3BucketServerSideEncryptionConfigurationRuleAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3BucketServerSideEncryptionConfigurationRuleAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.putApplyServerSideEncryptionByDefault">PutApplyServerSideEncryptionByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.resetApplyServerSideEncryptionByDefault">ResetApplyServerSideEncryptionByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.resetBucketKeyEnabled">ResetBucketKeyEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplyServerSideEncryptionByDefault` <a name="PutApplyServerSideEncryptionByDefault" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.putApplyServerSideEncryptionByDefault"></a>

```go
func PutApplyServerSideEncryptionByDefault(value S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.putApplyServerSideEncryptionByDefault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA</a>

---

##### `ResetApplyServerSideEncryptionByDefault` <a name="ResetApplyServerSideEncryptionByDefault" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.resetApplyServerSideEncryptionByDefault"></a>

```go
func ResetApplyServerSideEncryptionByDefault()
```

##### `ResetBucketKeyEnabled` <a name="ResetBucketKeyEnabled" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.resetBucketKeyEnabled"></a>

```go
func ResetBucketKeyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.applyServerSideEncryptionByDefault">ApplyServerSideEncryptionByDefault</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.applyServerSideEncryptionByDefaultInput">ApplyServerSideEncryptionByDefaultInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.bucketKeyEnabledInput">BucketKeyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyServerSideEncryptionByDefault`<sup>Required</sup> <a name="ApplyServerSideEncryptionByDefault" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.applyServerSideEncryptionByDefault"></a>

```go
func ApplyServerSideEncryptionByDefault() S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference</a>

---

##### `ApplyServerSideEncryptionByDefaultInput`<sup>Optional</sup> <a name="ApplyServerSideEncryptionByDefaultInput" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.applyServerSideEncryptionByDefaultInput"></a>

```go
func ApplyServerSideEncryptionByDefaultInput() S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA</a>

---

##### `BucketKeyEnabledInput`<sup>Optional</sup> <a name="BucketKeyEnabledInput" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.bucketKeyEnabledInput"></a>

```go
func BucketKeyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BucketKeyEnabled`<sup>Required</sup> <a name="BucketKeyEnabled" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.bucketKeyEnabled"></a>

```go
func BucketKeyEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference <a name="S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketserversideencryptionconfiguration"

s3bucketserversideencryptionconfiguration.NewS3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.resetKmsMasterKeyId">ResetKmsMasterKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsMasterKeyId` <a name="ResetKmsMasterKeyId" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.resetKmsMasterKeyId"></a>

```go
func ResetKmsMasterKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.kmsMasterKeyIdInput">KmsMasterKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.sseAlgorithmInput">SseAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.sseAlgorithm">SseAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsMasterKeyIdInput`<sup>Optional</sup> <a name="KmsMasterKeyIdInput" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.kmsMasterKeyIdInput"></a>

```go
func KmsMasterKeyIdInput() *string
```

- *Type:* *string

---

##### `SseAlgorithmInput`<sup>Optional</sup> <a name="SseAlgorithmInput" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.sseAlgorithmInput"></a>

```go
func SseAlgorithmInput() *string
```

- *Type:* *string

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.kmsMasterKeyId"></a>

```go
func KmsMasterKeyId() *string
```

- *Type:* *string

---

##### `SseAlgorithm`<sup>Required</sup> <a name="SseAlgorithm" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.sseAlgorithm"></a>

```go
func SseAlgorithm() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultAOutputReference.property.internalValue"></a>

```go
func InternalValue() S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketServerSideEncryptionConfiguration.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultA</a>

---



