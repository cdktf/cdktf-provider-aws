# `secretsmanagerSecret` Submodule <a name="`secretsmanagerSecret` Submodule" id="@cdktf/provider-aws.secretsmanagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecret <a name="SecretsmanagerSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret aws_secretsmanager_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer"></a>

```typescript
import { secretsmanagerSecret } from '@cdktf/provider-aws'

new secretsmanagerSecret.SecretsmanagerSecret(scope: Construct, id: string, config?: SecretsmanagerSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig">SecretsmanagerSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig">SecretsmanagerSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putReplica">putReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putRotationRules">putRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetForceOverwriteReplicaSecret">resetForceOverwriteReplicaSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRecoveryWindowInDays">resetRecoveryWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetReplica">resetReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRotationLambdaArn">resetRotationLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRotationRules">resetRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putReplica` <a name="putReplica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putReplica"></a>

```typescript
public putReplica(value: IResolvable | SecretsmanagerSecretReplica[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putReplica.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>[]

---

##### `putRotationRules` <a name="putRotationRules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putRotationRules"></a>

```typescript
public putRotationRules(value: SecretsmanagerSecretRotationRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putRotationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetForceOverwriteReplicaSecret` <a name="resetForceOverwriteReplicaSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetForceOverwriteReplicaSecret"></a>

```typescript
public resetForceOverwriteReplicaSecret(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetRecoveryWindowInDays` <a name="resetRecoveryWindowInDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRecoveryWindowInDays"></a>

```typescript
public resetRecoveryWindowInDays(): void
```

##### `resetReplica` <a name="resetReplica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetReplica"></a>

```typescript
public resetReplica(): void
```

##### `resetRotationLambdaArn` <a name="resetRotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRotationLambdaArn"></a>

```typescript
public resetRotationLambdaArn(): void
```

##### `resetRotationRules` <a name="resetRotationRules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRotationRules"></a>

```typescript
public resetRotationRules(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isConstruct"></a>

```typescript
import { secretsmanagerSecret } from '@cdktf/provider-aws'

secretsmanagerSecret.SecretsmanagerSecret.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement"></a>

```typescript
import { secretsmanagerSecret } from '@cdktf/provider-aws'

secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource"></a>

```typescript
import { secretsmanagerSecret } from '@cdktf/provider-aws'

secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replica">replica</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList">SecretsmanagerSecretReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationEnabled">rotationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationRules">rotationRules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference">SecretsmanagerSecretRotationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecretInput">forceOverwriteReplicaSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDaysInput">recoveryWindowInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replicaInput">replicaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationLambdaArnInput">rotationLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationRulesInput">rotationRulesInput</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecret">forceOverwriteReplicaSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationLambdaArn">rotationLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replica"></a>

```typescript
public readonly replica: SecretsmanagerSecretReplicaList;
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList">SecretsmanagerSecretReplicaList</a>

---

##### `rotationEnabled`<sup>Required</sup> <a name="rotationEnabled" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationEnabled"></a>

```typescript
public readonly rotationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rotationRules`<sup>Required</sup> <a name="rotationRules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationRules"></a>

```typescript
public readonly rotationRules: SecretsmanagerSecretRotationRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference">SecretsmanagerSecretRotationRulesOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `forceOverwriteReplicaSecretInput`<sup>Optional</sup> <a name="forceOverwriteReplicaSecretInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecretInput"></a>

```typescript
public readonly forceOverwriteReplicaSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `recoveryWindowInDaysInput`<sup>Optional</sup> <a name="recoveryWindowInDaysInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDaysInput"></a>

```typescript
public readonly recoveryWindowInDaysInput: number;
```

- *Type:* number

---

##### `replicaInput`<sup>Optional</sup> <a name="replicaInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replicaInput"></a>

```typescript
public readonly replicaInput: IResolvable | SecretsmanagerSecretReplica[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>[]

---

##### `rotationLambdaArnInput`<sup>Optional</sup> <a name="rotationLambdaArnInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationLambdaArnInput"></a>

```typescript
public readonly rotationLambdaArnInput: string;
```

- *Type:* string

---

##### `rotationRulesInput`<sup>Optional</sup> <a name="rotationRulesInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationRulesInput"></a>

```typescript
public readonly rotationRulesInput: SecretsmanagerSecretRotationRules;
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forceOverwriteReplicaSecret`<sup>Required</sup> <a name="forceOverwriteReplicaSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecret"></a>

```typescript
public readonly forceOverwriteReplicaSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

---

##### `rotationLambdaArn`<sup>Required</sup> <a name="rotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationLambdaArn"></a>

```typescript
public readonly rotationLambdaArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretConfig <a name="SecretsmanagerSecretConfig" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.Initializer"></a>

```typescript
import { secretsmanagerSecret } from '@cdktf/provider-aws'

const secretsmanagerSecretConfig: secretsmanagerSecret.SecretsmanagerSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#description SecretsmanagerSecret#description}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forceOverwriteReplicaSecret">forceOverwriteReplicaSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#id SecretsmanagerSecret#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name SecretsmanagerSecret#name}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#policy SecretsmanagerSecret#policy}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replica">replica</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>[]</code> | replica block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.rotationLambdaArn">rotationLambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#rotation_lambda_arn SecretsmanagerSecret#rotation_lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.rotationRules">rotationRules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a></code> | rotation_rules block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags SecretsmanagerSecret#tags}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#description SecretsmanagerSecret#description}.

---

##### `forceOverwriteReplicaSecret`<sup>Optional</sup> <a name="forceOverwriteReplicaSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forceOverwriteReplicaSecret"></a>

```typescript
public readonly forceOverwriteReplicaSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#id SecretsmanagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name SecretsmanagerSecret#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#policy SecretsmanagerSecret#policy}.

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="recoveryWindowInDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}.

---

##### `replica`<sup>Optional</sup> <a name="replica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replica"></a>

```typescript
public readonly replica: IResolvable | SecretsmanagerSecretReplica[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>[]

replica block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#replica SecretsmanagerSecret#replica}

---

##### `rotationLambdaArn`<sup>Optional</sup> <a name="rotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.rotationLambdaArn"></a>

```typescript
public readonly rotationLambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#rotation_lambda_arn SecretsmanagerSecret#rotation_lambda_arn}.

---

##### `rotationRules`<sup>Optional</sup> <a name="rotationRules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.rotationRules"></a>

```typescript
public readonly rotationRules: SecretsmanagerSecretRotationRules;
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a>

rotation_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#rotation_rules SecretsmanagerSecret#rotation_rules}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags SecretsmanagerSecret#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}.

---

### SecretsmanagerSecretReplica <a name="SecretsmanagerSecretReplica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.Initializer"></a>

```typescript
import { secretsmanagerSecret } from '@cdktf/provider-aws'

const secretsmanagerSecretReplica: secretsmanagerSecret.SecretsmanagerSecretReplica = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#region SecretsmanagerSecret#region}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#region SecretsmanagerSecret#region}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}.

---

### SecretsmanagerSecretRotationRules <a name="SecretsmanagerSecretRotationRules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules.Initializer"></a>

```typescript
import { secretsmanagerSecret } from '@cdktf/provider-aws'

const secretsmanagerSecretRotationRules: secretsmanagerSecret.SecretsmanagerSecretRotationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules.property.automaticallyAfterDays">automaticallyAfterDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#automatically_after_days SecretsmanagerSecret#automatically_after_days}. |

---

##### `automaticallyAfterDays`<sup>Required</sup> <a name="automaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules.property.automaticallyAfterDays"></a>

```typescript
public readonly automaticallyAfterDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#automatically_after_days SecretsmanagerSecret#automatically_after_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerSecretReplicaList <a name="SecretsmanagerSecretReplicaList" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer"></a>

```typescript
import { secretsmanagerSecret } from '@cdktf/provider-aws'

new secretsmanagerSecret.SecretsmanagerSecretReplicaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.get"></a>

```typescript
public get(index: number): SecretsmanagerSecretReplicaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecretsmanagerSecretReplica[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>[]

---


### SecretsmanagerSecretReplicaOutputReference <a name="SecretsmanagerSecretReplicaOutputReference" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer"></a>

```typescript
import { secretsmanagerSecret } from '@cdktf/provider-aws'

new secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.lastAccessedDate">lastAccessedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastAccessedDate`<sup>Required</sup> <a name="lastAccessedDate" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.lastAccessedDate"></a>

```typescript
public readonly lastAccessedDate: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretsmanagerSecretReplica | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a> | cdktf.IResolvable

---


### SecretsmanagerSecretRotationRulesOutputReference <a name="SecretsmanagerSecretRotationRulesOutputReference" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer"></a>

```typescript
import { secretsmanagerSecret } from '@cdktf/provider-aws'

new secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDaysInput">automaticallyAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDays">automaticallyAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticallyAfterDaysInput`<sup>Optional</sup> <a name="automaticallyAfterDaysInput" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDaysInput"></a>

```typescript
public readonly automaticallyAfterDaysInput: number;
```

- *Type:* number

---

##### `automaticallyAfterDays`<sup>Required</sup> <a name="automaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```typescript
public readonly automaticallyAfterDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SecretsmanagerSecretRotationRules;
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a>

---



