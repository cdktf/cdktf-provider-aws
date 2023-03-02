# `s3AccessPoint` Submodule <a name="`s3AccessPoint` Submodule" id="@cdktf/provider-aws.s3AccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3AccessPoint <a name="S3AccessPoint" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point aws_s3_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3AccessPoint(Construct Scope, string Id, S3AccessPointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig">S3AccessPointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig">S3AccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration">PutPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetBucketAccountId">ResetBucketAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetPublicAccessBlockConfiguration">ResetPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPublicAccessBlockConfiguration` <a name="PutPublicAccessBlockConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration"></a>

```csharp
private void PutPublicAccessBlockConfiguration(S3AccessPointPublicAccessBlockConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putPublicAccessBlockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

---

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putVpcConfiguration"></a>

```csharp
private void PutVpcConfiguration(S3AccessPointVpcConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetBucketAccountId` <a name="ResetBucketAccountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetBucketAccountId"></a>

```csharp
private void ResetBucketAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetPublicAccessBlockConfiguration` <a name="ResetPublicAccessBlockConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetPublicAccessBlockConfiguration"></a>

```csharp
private void ResetPublicAccessBlockConfiguration()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.resetVpcConfiguration"></a>

```csharp
private void ResetVpcConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3AccessPoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3AccessPoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3AccessPoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.endpoints">Endpoints</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.hasPublicAccessPolicy">HasPublicAccessPolicy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.networkOrigin">NetworkOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfiguration">PublicAccessBlockConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference">S3AccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference">S3AccessPointVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketAccountIdInput">BucketAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfigurationInput">PublicAccessBlockConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketAccountId">BucketAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.policy">Policy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.endpoints"></a>

```csharp
public StringMap Endpoints { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HasPublicAccessPolicy`<sup>Required</sup> <a name="HasPublicAccessPolicy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.hasPublicAccessPolicy"></a>

```csharp
public IResolvable HasPublicAccessPolicy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NetworkOrigin`<sup>Required</sup> <a name="NetworkOrigin" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.networkOrigin"></a>

```csharp
public string NetworkOrigin { get; }
```

- *Type:* string

---

##### `PublicAccessBlockConfiguration`<sup>Required</sup> <a name="PublicAccessBlockConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfiguration"></a>

```csharp
public S3AccessPointPublicAccessBlockConfigurationOutputReference PublicAccessBlockConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference">S3AccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.vpcConfiguration"></a>

```csharp
public S3AccessPointVpcConfigurationOutputReference VpcConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference">S3AccessPointVpcConfigurationOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BucketAccountIdInput`<sup>Optional</sup> <a name="BucketAccountIdInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketAccountIdInput"></a>

```csharp
public string BucketAccountIdInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `PublicAccessBlockConfigurationInput`<sup>Optional</sup> <a name="PublicAccessBlockConfigurationInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.publicAccessBlockConfigurationInput"></a>

```csharp
public S3AccessPointPublicAccessBlockConfiguration PublicAccessBlockConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.vpcConfigurationInput"></a>

```csharp
public S3AccessPointVpcConfiguration VpcConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketAccountId`<sup>Required</sup> <a name="BucketAccountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.bucketAccountId"></a>

```csharp
public string BucketAccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3AccessPointConfig <a name="S3AccessPointConfig" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3AccessPointConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Name,
    string AccountId = null,
    string BucketAccountId = null,
    string Id = null,
    string Policy = null,
    S3AccessPointPublicAccessBlockConfiguration PublicAccessBlockConfiguration = null,
    S3AccessPointVpcConfiguration VpcConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket S3AccessPoint#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#name S3AccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#account_id S3AccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.bucketAccountId">BucketAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket_account_id S3AccessPoint#bucket_account_id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#id S3AccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#policy S3AccessPoint#policy}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.publicAccessBlockConfiguration">PublicAccessBlockConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | public_access_block_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket S3AccessPoint#bucket}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#name S3AccessPoint#name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#account_id S3AccessPoint#account_id}.

---

##### `BucketAccountId`<sup>Optional</sup> <a name="BucketAccountId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.bucketAccountId"></a>

```csharp
public string BucketAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#bucket_account_id S3AccessPoint#bucket_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#id S3AccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#policy S3AccessPoint#policy}.

---

##### `PublicAccessBlockConfiguration`<sup>Optional</sup> <a name="PublicAccessBlockConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.publicAccessBlockConfiguration"></a>

```csharp
public S3AccessPointPublicAccessBlockConfiguration PublicAccessBlockConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

public_access_block_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#public_access_block_configuration S3AccessPoint#public_access_block_configuration}

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointConfig.property.vpcConfiguration"></a>

```csharp
public S3AccessPointVpcConfiguration VpcConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#vpc_configuration S3AccessPoint#vpc_configuration}

---

### S3AccessPointPublicAccessBlockConfiguration <a name="S3AccessPointPublicAccessBlockConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3AccessPointPublicAccessBlockConfiguration {
    object BlockPublicAcls = null,
    object BlockPublicPolicy = null,
    object IgnorePublicAcls = null,
    object RestrictPublicBuckets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_acls S3AccessPoint#block_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_policy S3AccessPoint#block_public_policy}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#ignore_public_acls S3AccessPoint#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#restrict_public_buckets S3AccessPoint#restrict_public_buckets}. |

---

##### `BlockPublicAcls`<sup>Optional</sup> <a name="BlockPublicAcls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

```csharp
public object BlockPublicAcls { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_acls S3AccessPoint#block_public_acls}.

---

##### `BlockPublicPolicy`<sup>Optional</sup> <a name="BlockPublicPolicy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

```csharp
public object BlockPublicPolicy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#block_public_policy S3AccessPoint#block_public_policy}.

---

##### `IgnorePublicAcls`<sup>Optional</sup> <a name="IgnorePublicAcls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

```csharp
public object IgnorePublicAcls { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#ignore_public_acls S3AccessPoint#ignore_public_acls}.

---

##### `RestrictPublicBuckets`<sup>Optional</sup> <a name="RestrictPublicBuckets" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

```csharp
public object RestrictPublicBuckets { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#restrict_public_buckets S3AccessPoint#restrict_public_buckets}.

---

### S3AccessPointVpcConfiguration <a name="S3AccessPointVpcConfiguration" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3AccessPointVpcConfiguration {
    string VpcId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#vpc_id S3AccessPoint#vpc_id}. |

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point#vpc_id S3AccessPoint#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3AccessPointPublicAccessBlockConfigurationOutputReference <a name="S3AccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3AccessPointPublicAccessBlockConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls">ResetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy">ResetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls">ResetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets">ResetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockPublicAcls` <a name="ResetBlockPublicAcls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls"></a>

```csharp
private void ResetBlockPublicAcls()
```

##### `ResetBlockPublicPolicy` <a name="ResetBlockPublicPolicy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy"></a>

```csharp
private void ResetBlockPublicPolicy()
```

##### `ResetIgnorePublicAcls` <a name="ResetIgnorePublicAcls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls"></a>

```csharp
private void ResetIgnorePublicAcls()
```

##### `ResetRestrictPublicBuckets` <a name="ResetRestrictPublicBuckets" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets"></a>

```csharp
private void ResetRestrictPublicBuckets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput">BlockPublicAclsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput">BlockPublicPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput">IgnorePublicAclsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput">RestrictPublicBucketsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockPublicAclsInput`<sup>Optional</sup> <a name="BlockPublicAclsInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput"></a>

```csharp
public object BlockPublicAclsInput { get; }
```

- *Type:* object

---

##### `BlockPublicPolicyInput`<sup>Optional</sup> <a name="BlockPublicPolicyInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput"></a>

```csharp
public object BlockPublicPolicyInput { get; }
```

- *Type:* object

---

##### `IgnorePublicAclsInput`<sup>Optional</sup> <a name="IgnorePublicAclsInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput"></a>

```csharp
public object IgnorePublicAclsInput { get; }
```

- *Type:* object

---

##### `RestrictPublicBucketsInput`<sup>Optional</sup> <a name="RestrictPublicBucketsInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput"></a>

```csharp
public object RestrictPublicBucketsInput { get; }
```

- *Type:* object

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```csharp
public object BlockPublicAcls { get; }
```

- *Type:* object

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```csharp
public object BlockPublicPolicy { get; }
```

- *Type:* object

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```csharp
public object IgnorePublicAcls { get; }
```

- *Type:* object

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```csharp
public object RestrictPublicBuckets { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```csharp
public S3AccessPointPublicAccessBlockConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointPublicAccessBlockConfiguration">S3AccessPointPublicAccessBlockConfiguration</a>

---


### S3AccessPointVpcConfigurationOutputReference <a name="S3AccessPointVpcConfigurationOutputReference" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3AccessPointVpcConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```csharp
public S3AccessPointVpcConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3AccessPoint.S3AccessPointVpcConfiguration">S3AccessPointVpcConfiguration</a>

---



