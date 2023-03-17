# `s3BucketObjectLockConfiguration` Submodule <a name="`s3BucketObjectLockConfiguration` Submodule" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketObjectLockConfigurationA <a name="S3BucketObjectLockConfigurationA" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration aws_s3_bucket_object_lock_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobjectlockconfiguration"

s3bucketobjectlockconfiguration.NewS3BucketObjectLockConfigurationA(scope Construct, id *string, config S3BucketObjectLockConfigurationAConfig) S3BucketObjectLockConfigurationA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig">S3BucketObjectLockConfigurationAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig">S3BucketObjectLockConfigurationAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetObjectLockEnabled">ResetObjectLockEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.putRule"></a>

```go
func PutRule(value S3BucketObjectLockConfigurationRuleA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a>

---

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetId"></a>

```go
func ResetId()
```

##### `ResetObjectLockEnabled` <a name="ResetObjectLockEnabled" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetObjectLockEnabled"></a>

```go
func ResetObjectLockEnabled()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetRule"></a>

```go
func ResetRule()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.resetToken"></a>

```go
func ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobjectlockconfiguration"

s3bucketobjectlockconfiguration.S3BucketObjectLockConfigurationA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobjectlockconfiguration"

s3bucketobjectlockconfiguration.S3BucketObjectLockConfigurationA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobjectlockconfiguration"

s3bucketobjectlockconfiguration.S3BucketObjectLockConfigurationA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference">S3BucketObjectLockConfigurationRuleAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.objectLockEnabledInput">ObjectLockEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.ruleInput">RuleInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.objectLockEnabled">ObjectLockEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.token">Token</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.rule"></a>

```go
func Rule() S3BucketObjectLockConfigurationRuleAOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference">S3BucketObjectLockConfigurationRuleAOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ObjectLockEnabledInput`<sup>Optional</sup> <a name="ObjectLockEnabledInput" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.objectLockEnabledInput"></a>

```go
func ObjectLockEnabledInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.ruleInput"></a>

```go
func RuleInput() S3BucketObjectLockConfigurationRuleA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a>

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ObjectLockEnabled`<sup>Required</sup> <a name="ObjectLockEnabled" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.objectLockEnabled"></a>

```go
func ObjectLockEnabled() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketObjectLockConfigurationAConfig <a name="S3BucketObjectLockConfigurationAConfig" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobjectlockconfiguration"

&s3bucketobjectlockconfiguration.S3BucketObjectLockConfigurationAConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	ExpectedBucketOwner: *string,
	Id: *string,
	ObjectLockEnabled: *string,
	Rule: github.com/cdktf/cdktf-provider-aws-go/aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA,
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#bucket S3BucketObjectLockConfigurationA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#expected_bucket_owner S3BucketObjectLockConfigurationA#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#id S3BucketObjectLockConfigurationA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.objectLockEnabled">ObjectLockEnabled</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#object_lock_enabled S3BucketObjectLockConfigurationA#object_lock_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.token">Token</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#token S3BucketObjectLockConfigurationA#token}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#bucket S3BucketObjectLockConfigurationA#bucket}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#expected_bucket_owner S3BucketObjectLockConfigurationA#expected_bucket_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#id S3BucketObjectLockConfigurationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObjectLockEnabled`<sup>Optional</sup> <a name="ObjectLockEnabled" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.objectLockEnabled"></a>

```go
ObjectLockEnabled *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#object_lock_enabled S3BucketObjectLockConfigurationA#object_lock_enabled}.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.rule"></a>

```go
Rule S3BucketObjectLockConfigurationRuleA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#rule S3BucketObjectLockConfigurationA#rule}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationAConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#token S3BucketObjectLockConfigurationA#token}.

---

### S3BucketObjectLockConfigurationRuleA <a name="S3BucketObjectLockConfigurationRuleA" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobjectlockconfiguration"

&s3bucketobjectlockconfiguration.S3BucketObjectLockConfigurationRuleA {
	DefaultRetention: github.com/cdktf/cdktf-provider-aws-go/aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA.property.defaultRetention">DefaultRetention</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a></code> | default_retention block. |

---

##### `DefaultRetention`<sup>Required</sup> <a name="DefaultRetention" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA.property.defaultRetention"></a>

```go
DefaultRetention S3BucketObjectLockConfigurationRuleDefaultRetentionA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a>

default_retention block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#default_retention S3BucketObjectLockConfigurationA#default_retention}

---

### S3BucketObjectLockConfigurationRuleDefaultRetentionA <a name="S3BucketObjectLockConfigurationRuleDefaultRetentionA" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobjectlockconfiguration"

&s3bucketobjectlockconfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA {
	Days: *f64,
	Mode: *string,
	Years: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.property.days">Days</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#days S3BucketObjectLockConfigurationA#days}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#mode S3BucketObjectLockConfigurationA#mode}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.property.years">Years</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#years S3BucketObjectLockConfigurationA#years}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.property.days"></a>

```go
Days *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#days S3BucketObjectLockConfigurationA#days}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#mode S3BucketObjectLockConfigurationA#mode}.

---

##### `Years`<sup>Optional</sup> <a name="Years" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA.property.years"></a>

```go
Years *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object_lock_configuration#years S3BucketObjectLockConfigurationA#years}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketObjectLockConfigurationRuleAOutputReference <a name="S3BucketObjectLockConfigurationRuleAOutputReference" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobjectlockconfiguration"

s3bucketobjectlockconfiguration.NewS3BucketObjectLockConfigurationRuleAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3BucketObjectLockConfigurationRuleAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.putDefaultRetention">PutDefaultRetention</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultRetention` <a name="PutDefaultRetention" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.putDefaultRetention"></a>

```go
func PutDefaultRetention(value S3BucketObjectLockConfigurationRuleDefaultRetentionA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.putDefaultRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.defaultRetention">DefaultRetention</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference">S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.defaultRetentionInput">DefaultRetentionInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultRetention`<sup>Required</sup> <a name="DefaultRetention" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.defaultRetention"></a>

```go
func DefaultRetention() S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference">S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference</a>

---

##### `DefaultRetentionInput`<sup>Optional</sup> <a name="DefaultRetentionInput" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.defaultRetentionInput"></a>

```go
func DefaultRetentionInput() S3BucketObjectLockConfigurationRuleDefaultRetentionA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleAOutputReference.property.internalValue"></a>

```go
func InternalValue() S3BucketObjectLockConfigurationRuleA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleA">S3BucketObjectLockConfigurationRuleA</a>

---


### S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference <a name="S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobjectlockconfiguration"

s3bucketobjectlockconfiguration.NewS3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resetYears">ResetYears</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resetDays"></a>

```go
func ResetDays()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetYears` <a name="ResetYears" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.resetYears"></a>

```go
func ResetYears()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.daysInput">DaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.yearsInput">YearsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.days">Days</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.years">Years</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.daysInput"></a>

```go
func DaysInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `YearsInput`<sup>Optional</sup> <a name="YearsInput" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.yearsInput"></a>

```go
func YearsInput() *f64
```

- *Type:* *f64

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.days"></a>

```go
func Days() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Years`<sup>Required</sup> <a name="Years" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.years"></a>

```go
func Years() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference.property.internalValue"></a>

```go
func InternalValue() S3BucketObjectLockConfigurationRuleDefaultRetentionA
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionA">S3BucketObjectLockConfigurationRuleDefaultRetentionA</a>

---



