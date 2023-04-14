# `comprehendDocumentClassifier` Submodule <a name="`comprehendDocumentClassifier` Submodule" id="@cdktf/provider-aws.comprehendDocumentClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendDocumentClassifier <a name="ComprehendDocumentClassifier" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier aws_comprehend_document_classifier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifier(scope Construct, id *string, config ComprehendDocumentClassifierConfig) ComprehendDocumentClassifier
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig">ComprehendDocumentClassifierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig">ComprehendDocumentClassifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig">PutInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig">PutOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelKmsKeyId">ResetModelKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOutputDataConfig">ResetOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionName">ResetVersionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionNamePrefix">ResetVersionNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutInputDataConfig` <a name="PutInputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig"></a>

```go
func PutInputDataConfig(value ComprehendDocumentClassifierInputDataConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

---

##### `PutOutputDataConfig` <a name="PutOutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig"></a>

```go
func PutOutputDataConfig(value ComprehendDocumentClassifierOutputDataConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTimeouts"></a>

```go
func PutTimeouts(value ComprehendDocumentClassifierTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig"></a>

```go
func PutVpcConfig(value ComprehendDocumentClassifierVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetId"></a>

```go
func ResetId()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetMode"></a>

```go
func ResetMode()
```

##### `ResetModelKmsKeyId` <a name="ResetModelKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelKmsKeyId"></a>

```go
func ResetModelKmsKeyId()
```

##### `ResetOutputDataConfig` <a name="ResetOutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOutputDataConfig"></a>

```go
func ResetOutputDataConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersionName` <a name="ResetVersionName" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionName"></a>

```go
func ResetVersionName()
```

##### `ResetVersionNamePrefix` <a name="ResetVersionNamePrefix" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionNamePrefix"></a>

```go
func ResetVersionNamePrefix()
```

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVolumeKmsKeyId"></a>

```go
func ResetVolumeKmsKeyId()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

comprehenddocumentclassifier.ComprehendDocumentClassifier_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

comprehenddocumentclassifier.ComprehendDocumentClassifier_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

comprehenddocumentclassifier.ComprehendDocumentClassifier_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference">ComprehendDocumentClassifierInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfig">OutputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference">ComprehendDocumentClassifierOutputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference">ComprehendDocumentClassifierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference">ComprehendDocumentClassifierVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArnInput">DataAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfigInput">InputDataConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyIdInput">ModelKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfigInput">OutputDataConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNameInput">VersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNamePrefixInput">VersionNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNamePrefix">VersionNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfig"></a>

```go
func InputDataConfig() ComprehendDocumentClassifierInputDataConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference">ComprehendDocumentClassifierInputDataConfigOutputReference</a>

---

##### `OutputDataConfig`<sup>Required</sup> <a name="OutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfig"></a>

```go
func OutputDataConfig() ComprehendDocumentClassifierOutputDataConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference">ComprehendDocumentClassifierOutputDataConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.timeouts"></a>

```go
func Timeouts() ComprehendDocumentClassifierTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference">ComprehendDocumentClassifierTimeoutsOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfig"></a>

```go
func VpcConfig() ComprehendDocumentClassifierVpcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference">ComprehendDocumentClassifierVpcConfigOutputReference</a>

---

##### `DataAccessRoleArnInput`<sup>Optional</sup> <a name="DataAccessRoleArnInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArnInput"></a>

```go
func DataAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputDataConfigInput`<sup>Optional</sup> <a name="InputDataConfigInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfigInput"></a>

```go
func InputDataConfigInput() ComprehendDocumentClassifierInputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ModelKmsKeyIdInput`<sup>Optional</sup> <a name="ModelKmsKeyIdInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyIdInput"></a>

```go
func ModelKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputDataConfigInput`<sup>Optional</sup> <a name="OutputDataConfigInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfigInput"></a>

```go
func OutputDataConfigInput() ComprehendDocumentClassifierOutputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNameInput"></a>

```go
func VersionNameInput() *string
```

- *Type:* *string

---

##### `VersionNamePrefixInput`<sup>Optional</sup> <a name="VersionNamePrefixInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNamePrefixInput"></a>

```go
func VersionNamePrefixInput() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyIdInput"></a>

```go
func VolumeKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfigInput"></a>

```go
func VpcConfigInput() ComprehendDocumentClassifierVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArn"></a>

```go
func DataAccessRoleArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ModelKmsKeyId`<sup>Required</sup> <a name="ModelKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyId"></a>

```go
func ModelKmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `VersionNamePrefix`<sup>Required</sup> <a name="VersionNamePrefix" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNamePrefix"></a>

```go
func VersionNamePrefix() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyId"></a>

```go
func VolumeKmsKeyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendDocumentClassifierConfig <a name="ComprehendDocumentClassifierConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataAccessRoleArn: *string,
	InputDataConfig: github.com/cdktf/cdktf-provider-aws-go/aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig,
	LanguageCode: *string,
	Name: *string,
	Id: *string,
	Mode: *string,
	ModelKmsKeyId: *string,
	OutputDataConfig: github.com/cdktf/cdktf-provider-aws-go/aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts,
	VersionName: *string,
	VersionNamePrefix: *string,
	VolumeKmsKeyId: *string,
	VpcConfig: github.com/cdktf/cdktf-provider-aws-go/aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#name ComprehendDocumentClassifier#name}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#id ComprehendDocumentClassifier#id}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.outputDataConfig">OutputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | output_data_config block. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags_all ComprehendDocumentClassifier#tags_all}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionName">VersionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionNamePrefix">VersionNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name_prefix ComprehendDocumentClassifier#version_name_prefix}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dataAccessRoleArn"></a>

```go
DataAccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}.

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.inputDataConfig"></a>

```go
InputDataConfig ComprehendDocumentClassifierInputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#input_data_config ComprehendDocumentClassifier#input_data_config}

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#name ComprehendDocumentClassifier#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#id ComprehendDocumentClassifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}.

---

##### `ModelKmsKeyId`<sup>Optional</sup> <a name="ModelKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelKmsKeyId"></a>

```go
ModelKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}.

---

##### `OutputDataConfig`<sup>Optional</sup> <a name="OutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.outputDataConfig"></a>

```go
OutputDataConfig ComprehendDocumentClassifierOutputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

output_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#output_data_config ComprehendDocumentClassifier#output_data_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags_all ComprehendDocumentClassifier#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.timeouts"></a>

```go
Timeouts ComprehendDocumentClassifierTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#timeouts ComprehendDocumentClassifier#timeouts}

---

##### `VersionName`<sup>Optional</sup> <a name="VersionName" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionName"></a>

```go
VersionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}.

---

##### `VersionNamePrefix`<sup>Optional</sup> <a name="VersionNamePrefix" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionNamePrefix"></a>

```go
VersionNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name_prefix ComprehendDocumentClassifier#version_name_prefix}.

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.volumeKmsKeyId"></a>

```go
VolumeKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.vpcConfig"></a>

```go
VpcConfig ComprehendDocumentClassifierVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#vpc_config ComprehendDocumentClassifier#vpc_config}

---

### ComprehendDocumentClassifierInputDataConfig <a name="ComprehendDocumentClassifierInputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierInputDataConfig {
	AugmentedManifests: interface{},
	DataFormat: *string,
	LabelDelimiter: *string,
	S3Uri: *string,
	TestS3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.augmentedManifests">AugmentedManifests</a></code> | <code>interface{}</code> | augmented_manifests block. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.dataFormat">DataFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.labelDelimiter">LabelDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.testS3Uri">TestS3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}. |

---

##### `AugmentedManifests`<sup>Optional</sup> <a name="AugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.augmentedManifests"></a>

```go
AugmentedManifests interface{}
```

- *Type:* interface{}

augmented_manifests block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#augmented_manifests ComprehendDocumentClassifier#augmented_manifests}

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.dataFormat"></a>

```go
DataFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}.

---

##### `LabelDelimiter`<sup>Optional</sup> <a name="LabelDelimiter" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.labelDelimiter"></a>

```go
LabelDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}.

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `TestS3Uri`<sup>Optional</sup> <a name="TestS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.testS3Uri"></a>

```go
TestS3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}.

---

### ComprehendDocumentClassifierInputDataConfigAugmentedManifests <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests {
	AttributeNames: *[]*string,
	S3Uri: *string,
	AnnotationDataS3Uri: *string,
	DocumentType: *string,
	SourceDocumentsS3Uri: *string,
	Split: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.attributeNames">AttributeNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#attribute_names ComprehendDocumentClassifier#attribute_names}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.annotationDataS3Uri">AnnotationDataS3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#annotation_data_s3_uri ComprehendDocumentClassifier#annotation_data_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.documentType">DocumentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri">SourceDocumentsS3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#source_documents_s3_uri ComprehendDocumentClassifier#source_documents_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.split">Split</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#split ComprehendDocumentClassifier#split}. |

---

##### `AttributeNames`<sup>Required</sup> <a name="AttributeNames" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.attributeNames"></a>

```go
AttributeNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#attribute_names ComprehendDocumentClassifier#attribute_names}.

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `AnnotationDataS3Uri`<sup>Optional</sup> <a name="AnnotationDataS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.annotationDataS3Uri"></a>

```go
AnnotationDataS3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#annotation_data_s3_uri ComprehendDocumentClassifier#annotation_data_s3_uri}.

---

##### `DocumentType`<sup>Optional</sup> <a name="DocumentType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.documentType"></a>

```go
DocumentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}.

---

##### `SourceDocumentsS3Uri`<sup>Optional</sup> <a name="SourceDocumentsS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri"></a>

```go
SourceDocumentsS3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#source_documents_s3_uri ComprehendDocumentClassifier#source_documents_s3_uri}.

---

##### `Split`<sup>Optional</sup> <a name="Split" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.split"></a>

```go
Split *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#split ComprehendDocumentClassifier#split}.

---

### ComprehendDocumentClassifierOutputDataConfig <a name="ComprehendDocumentClassifierOutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierOutputDataConfig {
	S3Uri: *string,
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}.

---

### ComprehendDocumentClassifierTimeouts <a name="ComprehendDocumentClassifierTimeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#create ComprehendDocumentClassifier#create}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#delete ComprehendDocumentClassifier#delete}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#update ComprehendDocumentClassifier#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#create ComprehendDocumentClassifier#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#delete ComprehendDocumentClassifier#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#update ComprehendDocumentClassifier#update}.

---

### ComprehendDocumentClassifierVpcConfig <a name="ComprehendDocumentClassifierVpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierInputDataConfigAugmentedManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get"></a>

```go
func Get(index *f64) ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri">ResetAnnotationDataS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetDocumentType">ResetDocumentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri">ResetSourceDocumentsS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSplit">ResetSplit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotationDataS3Uri` <a name="ResetAnnotationDataS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri"></a>

```go
func ResetAnnotationDataS3Uri()
```

##### `ResetDocumentType` <a name="ResetDocumentType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetDocumentType"></a>

```go
func ResetDocumentType()
```

##### `ResetSourceDocumentsS3Uri` <a name="ResetSourceDocumentsS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri"></a>

```go
func ResetSourceDocumentsS3Uri()
```

##### `ResetSplit` <a name="ResetSplit" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSplit"></a>

```go
func ResetSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput">AnnotationDataS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput">AttributeNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput">DocumentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput">SourceDocumentsS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.splitInput">SplitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri">AnnotationDataS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">AttributeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.documentType">DocumentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri">SourceDocumentsS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.split">Split</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnnotationDataS3UriInput`<sup>Optional</sup> <a name="AnnotationDataS3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput"></a>

```go
func AnnotationDataS3UriInput() *string
```

- *Type:* *string

---

##### `AttributeNamesInput`<sup>Optional</sup> <a name="AttributeNamesInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput"></a>

```go
func AttributeNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DocumentTypeInput`<sup>Optional</sup> <a name="DocumentTypeInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput"></a>

```go
func DocumentTypeInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `SourceDocumentsS3UriInput`<sup>Optional</sup> <a name="SourceDocumentsS3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput"></a>

```go
func SourceDocumentsS3UriInput() *string
```

- *Type:* *string

---

##### `SplitInput`<sup>Optional</sup> <a name="SplitInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.splitInput"></a>

```go
func SplitInput() *string
```

- *Type:* *string

---

##### `AnnotationDataS3Uri`<sup>Required</sup> <a name="AnnotationDataS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri"></a>

```go
func AnnotationDataS3Uri() *string
```

- *Type:* *string

---

##### `AttributeNames`<sup>Required</sup> <a name="AttributeNames" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```go
func AttributeNames() *[]*string
```

- *Type:* *[]*string

---

##### `DocumentType`<sup>Required</sup> <a name="DocumentType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.documentType"></a>

```go
func DocumentType() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `SourceDocumentsS3Uri`<sup>Required</sup> <a name="SourceDocumentsS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri"></a>

```go
func SourceDocumentsS3Uri() *string
```

- *Type:* *string

---

##### `Split`<sup>Required</sup> <a name="Split" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```go
func Split() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendDocumentClassifierInputDataConfigOutputReference <a name="ComprehendDocumentClassifierInputDataConfigOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierInputDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendDocumentClassifierInputDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests">PutAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetAugmentedManifests">ResetAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDataFormat">ResetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetLabelDelimiter">ResetLabelDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetTestS3Uri">ResetTestS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAugmentedManifests` <a name="PutAugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests"></a>

```go
func PutAugmentedManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAugmentedManifests` <a name="ResetAugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetAugmentedManifests"></a>

```go
func ResetAugmentedManifests()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDataFormat"></a>

```go
func ResetDataFormat()
```

##### `ResetLabelDelimiter` <a name="ResetLabelDelimiter" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetLabelDelimiter"></a>

```go
func ResetLabelDelimiter()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```

##### `ResetTestS3Uri` <a name="ResetTestS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetTestS3Uri"></a>

```go
func ResetTestS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifests">AugmentedManifests</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList">ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifestsInput">AugmentedManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormatInput">DataFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiterInput">LabelDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3UriInput">TestS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormat">DataFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiter">LabelDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3Uri">TestS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AugmentedManifests`<sup>Required</sup> <a name="AugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifests"></a>

```go
func AugmentedManifests() ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList">ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList</a>

---

##### `AugmentedManifestsInput`<sup>Optional</sup> <a name="AugmentedManifestsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifestsInput"></a>

```go
func AugmentedManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormatInput"></a>

```go
func DataFormatInput() *string
```

- *Type:* *string

---

##### `LabelDelimiterInput`<sup>Optional</sup> <a name="LabelDelimiterInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiterInput"></a>

```go
func LabelDelimiterInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `TestS3UriInput`<sup>Optional</sup> <a name="TestS3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3UriInput"></a>

```go
func TestS3UriInput() *string
```

- *Type:* *string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormat"></a>

```go
func DataFormat() *string
```

- *Type:* *string

---

##### `LabelDelimiter`<sup>Required</sup> <a name="LabelDelimiter" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiter"></a>

```go
func LabelDelimiter() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `TestS3Uri`<sup>Required</sup> <a name="TestS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3Uri"></a>

```go
func TestS3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComprehendDocumentClassifierInputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

---


### ComprehendDocumentClassifierOutputDataConfigOutputReference <a name="ComprehendDocumentClassifierOutputDataConfigOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierOutputDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendDocumentClassifierOutputDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.outputS3Uri">OutputS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutputS3Uri`<sup>Required</sup> <a name="OutputS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.outputS3Uri"></a>

```go
func OutputS3Uri() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComprehendDocumentClassifierOutputDataConfig
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

---


### ComprehendDocumentClassifierTimeoutsOutputReference <a name="ComprehendDocumentClassifierTimeoutsOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendDocumentClassifierTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendDocumentClassifierVpcConfigOutputReference <a name="ComprehendDocumentClassifierVpcConfigOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendDocumentClassifierVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComprehendDocumentClassifierVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

---



