# `redshiftserverlessNamespace` Submodule <a name="`redshiftserverlessNamespace` Submodule" id="@cdktf/provider-aws.redshiftserverlessNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessNamespace <a name="RedshiftserverlessNamespace" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace aws_redshiftserverless_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftserverlessNamespace(Construct Scope, string Id, RedshiftserverlessNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig">RedshiftserverlessNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig">RedshiftserverlessNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername">ResetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword">ResetAdminUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn">ResetDefaultIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports">ResetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAdminUsername` <a name="ResetAdminUsername" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername"></a>

```csharp
private void ResetAdminUsername()
```

##### `ResetAdminUserPassword` <a name="ResetAdminUserPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword"></a>

```csharp
private void ResetAdminUserPassword()
```

##### `ResetDbName` <a name="ResetDbName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName"></a>

```csharp
private void ResetDbName()
```

##### `ResetDefaultIamRoleArn` <a name="ResetDefaultIamRoleArn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn"></a>

```csharp
private void ResetDefaultIamRoleArn()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles"></a>

```csharp
private void ResetIamRoles()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLogExports` <a name="ResetLogExports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports"></a>

```csharp
private void ResetLogExports()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftserverlessNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftserverlessNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RedshiftserverlessNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput">AdminUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput">DefaultIamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput">IamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput">LogExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername">AdminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword">AdminUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn">DefaultIamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports">LogExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput"></a>

```csharp
public string AdminUsernameInput { get; }
```

- *Type:* string

---

##### `AdminUserPasswordInput`<sup>Optional</sup> <a name="AdminUserPasswordInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput"></a>

```csharp
public string AdminUserPasswordInput { get; }
```

- *Type:* string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `DefaultIamRoleArnInput`<sup>Optional</sup> <a name="DefaultIamRoleArnInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput"></a>

```csharp
public string DefaultIamRoleArnInput { get; }
```

- *Type:* string

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput"></a>

```csharp
public string[] IamRolesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LogExportsInput`<sup>Optional</sup> <a name="LogExportsInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput"></a>

```csharp
public string[] LogExportsInput { get; }
```

- *Type:* string[]

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername"></a>

```csharp
public string AdminUsername { get; }
```

- *Type:* string

---

##### `AdminUserPassword`<sup>Required</sup> <a name="AdminUserPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword"></a>

```csharp
public string AdminUserPassword { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DefaultIamRoleArn`<sup>Required</sup> <a name="DefaultIamRoleArn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn"></a>

```csharp
public string DefaultIamRoleArn { get; }
```

- *Type:* string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LogExports`<sup>Required</sup> <a name="LogExports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports"></a>

```csharp
public string[] LogExports { get; }
```

- *Type:* string[]

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessNamespaceConfig <a name="RedshiftserverlessNamespaceConfig" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RedshiftserverlessNamespaceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NamespaceName,
    string AdminUsername = null,
    string AdminUserPassword = null,
    string DbName = null,
    string DefaultIamRoleArn = null,
    string[] IamRoles = null,
    string Id = null,
    string KmsKeyId = null,
    string[] LogExports = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername">AdminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword">AdminUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName">DbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn">DefaultIamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#id RedshiftserverlessNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports">LogExports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#tags_all RedshiftserverlessNamespace#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}.

---

##### `AdminUsername`<sup>Optional</sup> <a name="AdminUsername" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername"></a>

```csharp
public string AdminUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}.

---

##### `AdminUserPassword`<sup>Optional</sup> <a name="AdminUserPassword" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword"></a>

```csharp
public string AdminUserPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}.

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}.

---

##### `DefaultIamRoleArn`<sup>Optional</sup> <a name="DefaultIamRoleArn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn"></a>

```csharp
public string DefaultIamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}.

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#id RedshiftserverlessNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}.

---

##### `LogExports`<sup>Optional</sup> <a name="LogExports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports"></a>

```csharp
public string[] LogExports { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_namespace#tags_all RedshiftserverlessNamespace#tags_all}.

---



