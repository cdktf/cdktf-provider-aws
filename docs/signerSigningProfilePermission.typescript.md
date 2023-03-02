# `signerSigningProfilePermission` Submodule <a name="`signerSigningProfilePermission` Submodule" id="@cdktf/provider-aws.signerSigningProfilePermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignerSigningProfilePermission <a name="SignerSigningProfilePermission" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission aws_signer_signing_profile_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer"></a>

```typescript
import { signerSigningProfilePermission } from '@cdktf/provider-aws'

new signerSigningProfilePermission.SignerSigningProfilePermission(scope: Construct, id: string, config: SignerSigningProfilePermissionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig">SignerSigningProfilePermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig">SignerSigningProfilePermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetProfileVersion">resetProfileVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetStatementId">resetStatementId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetStatementIdPrefix">resetStatementIdPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProfileVersion` <a name="resetProfileVersion" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetProfileVersion"></a>

```typescript
public resetProfileVersion(): void
```

##### `resetStatementId` <a name="resetStatementId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetStatementId"></a>

```typescript
public resetStatementId(): void
```

##### `resetStatementIdPrefix` <a name="resetStatementIdPrefix" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetStatementIdPrefix"></a>

```typescript
public resetStatementIdPrefix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isConstruct"></a>

```typescript
import { signerSigningProfilePermission } from '@cdktf/provider-aws'

signerSigningProfilePermission.SignerSigningProfilePermission.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformElement"></a>

```typescript
import { signerSigningProfilePermission } from '@cdktf/provider-aws'

signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformResource"></a>

```typescript
import { signerSigningProfilePermission } from '@cdktf/provider-aws'

signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileVersionInput">profileVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdInput">statementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdPrefixInput">statementIdPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileVersion">profileVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementId">statementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdPrefix">statementIdPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `profileVersionInput`<sup>Optional</sup> <a name="profileVersionInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileVersionInput"></a>

```typescript
public readonly profileVersionInput: string;
```

- *Type:* string

---

##### `statementIdInput`<sup>Optional</sup> <a name="statementIdInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdInput"></a>

```typescript
public readonly statementIdInput: string;
```

- *Type:* string

---

##### `statementIdPrefixInput`<sup>Optional</sup> <a name="statementIdPrefixInput" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdPrefixInput"></a>

```typescript
public readonly statementIdPrefixInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `profileVersion`<sup>Required</sup> <a name="profileVersion" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileVersion"></a>

```typescript
public readonly profileVersion: string;
```

- *Type:* string

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementId"></a>

```typescript
public readonly statementId: string;
```

- *Type:* string

---

##### `statementIdPrefix`<sup>Required</sup> <a name="statementIdPrefix" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdPrefix"></a>

```typescript
public readonly statementIdPrefix: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SignerSigningProfilePermissionConfig <a name="SignerSigningProfilePermissionConfig" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.Initializer"></a>

```typescript
import { signerSigningProfilePermission } from '@cdktf/provider-aws'

const signerSigningProfilePermissionConfig: signerSigningProfilePermission.SignerSigningProfilePermissionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#action SignerSigningProfilePermission#action}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#principal SignerSigningProfilePermission#principal}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_name SignerSigningProfilePermission#profile_name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#id SignerSigningProfilePermission#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.profileVersion">profileVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_version SignerSigningProfilePermission#profile_version}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.statementId">statementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id SignerSigningProfilePermission#statement_id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.statementIdPrefix">statementIdPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id_prefix SignerSigningProfilePermission#statement_id_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#action SignerSigningProfilePermission#action}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#principal SignerSigningProfilePermission#principal}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_name SignerSigningProfilePermission#profile_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#id SignerSigningProfilePermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `profileVersion`<sup>Optional</sup> <a name="profileVersion" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.profileVersion"></a>

```typescript
public readonly profileVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_version SignerSigningProfilePermission#profile_version}.

---

##### `statementId`<sup>Optional</sup> <a name="statementId" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.statementId"></a>

```typescript
public readonly statementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id SignerSigningProfilePermission#statement_id}.

---

##### `statementIdPrefix`<sup>Optional</sup> <a name="statementIdPrefix" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.statementIdPrefix"></a>

```typescript
public readonly statementIdPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id_prefix SignerSigningProfilePermission#statement_id_prefix}.

---



