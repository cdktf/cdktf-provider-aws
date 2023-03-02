# `kmsGrant` Submodule <a name="`kmsGrant` Submodule" id="@cdktf/provider-aws.kmsGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsGrant <a name="KmsGrant" id="@cdktf/provider-aws.kmsGrant.KmsGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_grant aws_kms_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer"></a>

```typescript
import { kmsGrant } from '@cdktf/provider-aws'

new kmsGrant.KmsGrant(scope: Construct, id: string, config: KmsGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig">KmsGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig">KmsGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.putConstraints">putConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetConstraints">resetConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetGrantCreationTokens">resetGrantCreationTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetRetireOnDelete">resetRetireOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetRetiringPrincipal">resetRetiringPrincipal</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsGrant.KmsGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kmsGrant.KmsGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsGrant.KmsGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsGrant.KmsGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kmsGrant.KmsGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kmsGrant.KmsGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConstraints` <a name="putConstraints" id="@cdktf/provider-aws.kmsGrant.KmsGrant.putConstraints"></a>

```typescript
public putConstraints(value: IResolvable | KmsGrantConstraints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsGrant.KmsGrant.putConstraints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>[]

---

##### `resetConstraints` <a name="resetConstraints" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetConstraints"></a>

```typescript
public resetConstraints(): void
```

##### `resetGrantCreationTokens` <a name="resetGrantCreationTokens" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetGrantCreationTokens"></a>

```typescript
public resetGrantCreationTokens(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRetireOnDelete` <a name="resetRetireOnDelete" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetRetireOnDelete"></a>

```typescript
public resetRetireOnDelete(): void
```

##### `resetRetiringPrincipal` <a name="resetRetiringPrincipal" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetRetiringPrincipal"></a>

```typescript
public resetRetiringPrincipal(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isConstruct"></a>

```typescript
import { kmsGrant } from '@cdktf/provider-aws'

kmsGrant.KmsGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformElement"></a>

```typescript
import { kmsGrant } from '@cdktf/provider-aws'

kmsGrant.KmsGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformResource"></a>

```typescript
import { kmsGrant } from '@cdktf/provider-aws'

kmsGrant.KmsGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.constraints">constraints</a></code> | <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList">KmsGrantConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantId">grantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantToken">grantToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.constraintsInput">constraintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantCreationTokensInput">grantCreationTokensInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.granteePrincipalInput">granteePrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.operationsInput">operationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.retireOnDeleteInput">retireOnDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.retiringPrincipalInput">retiringPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantCreationTokens">grantCreationTokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.granteePrincipal">granteePrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.operations">operations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.retireOnDelete">retireOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.retiringPrincipal">retiringPrincipal</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.constraints"></a>

```typescript
public readonly constraints: KmsGrantConstraintsList;
```

- *Type:* <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList">KmsGrantConstraintsList</a>

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

---

##### `grantToken`<sup>Required</sup> <a name="grantToken" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantToken"></a>

```typescript
public readonly grantToken: string;
```

- *Type:* string

---

##### `constraintsInput`<sup>Optional</sup> <a name="constraintsInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.constraintsInput"></a>

```typescript
public readonly constraintsInput: IResolvable | KmsGrantConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>[]

---

##### `grantCreationTokensInput`<sup>Optional</sup> <a name="grantCreationTokensInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantCreationTokensInput"></a>

```typescript
public readonly grantCreationTokensInput: string[];
```

- *Type:* string[]

---

##### `granteePrincipalInput`<sup>Optional</sup> <a name="granteePrincipalInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.granteePrincipalInput"></a>

```typescript
public readonly granteePrincipalInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.operationsInput"></a>

```typescript
public readonly operationsInput: string[];
```

- *Type:* string[]

---

##### `retireOnDeleteInput`<sup>Optional</sup> <a name="retireOnDeleteInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.retireOnDeleteInput"></a>

```typescript
public readonly retireOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retiringPrincipalInput`<sup>Optional</sup> <a name="retiringPrincipalInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.retiringPrincipalInput"></a>

```typescript
public readonly retiringPrincipalInput: string;
```

- *Type:* string

---

##### `grantCreationTokens`<sup>Required</sup> <a name="grantCreationTokens" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantCreationTokens"></a>

```typescript
public readonly grantCreationTokens: string[];
```

- *Type:* string[]

---

##### `granteePrincipal`<sup>Required</sup> <a name="granteePrincipal" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.granteePrincipal"></a>

```typescript
public readonly granteePrincipal: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.operations"></a>

```typescript
public readonly operations: string[];
```

- *Type:* string[]

---

##### `retireOnDelete`<sup>Required</sup> <a name="retireOnDelete" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.retireOnDelete"></a>

```typescript
public readonly retireOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retiringPrincipal`<sup>Required</sup> <a name="retiringPrincipal" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.retiringPrincipal"></a>

```typescript
public readonly retiringPrincipal: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsGrantConfig <a name="KmsGrantConfig" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.Initializer"></a>

```typescript
import { kmsGrant } from '@cdktf/provider-aws'

const kmsGrantConfig: kmsGrant.KmsGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.granteePrincipal">granteePrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grantee_principal KmsGrant#grantee_principal}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#key_id KmsGrant#key_id}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.operations">operations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#operations KmsGrant#operations}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.constraints">constraints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>[]</code> | constraints block. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.grantCreationTokens">grantCreationTokens</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grant_creation_tokens KmsGrant#grant_creation_tokens}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#id KmsGrant#id}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#name KmsGrant#name}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.retireOnDelete">retireOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retire_on_delete KmsGrant#retire_on_delete}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.retiringPrincipal">retiringPrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retiring_principal KmsGrant#retiring_principal}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `granteePrincipal`<sup>Required</sup> <a name="granteePrincipal" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.granteePrincipal"></a>

```typescript
public readonly granteePrincipal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grantee_principal KmsGrant#grantee_principal}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#key_id KmsGrant#key_id}.

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.operations"></a>

```typescript
public readonly operations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#operations KmsGrant#operations}.

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.constraints"></a>

```typescript
public readonly constraints: IResolvable | KmsGrantConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>[]

constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#constraints KmsGrant#constraints}

---

##### `grantCreationTokens`<sup>Optional</sup> <a name="grantCreationTokens" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.grantCreationTokens"></a>

```typescript
public readonly grantCreationTokens: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grant_creation_tokens KmsGrant#grant_creation_tokens}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#id KmsGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#name KmsGrant#name}.

---

##### `retireOnDelete`<sup>Optional</sup> <a name="retireOnDelete" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.retireOnDelete"></a>

```typescript
public readonly retireOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retire_on_delete KmsGrant#retire_on_delete}.

---

##### `retiringPrincipal`<sup>Optional</sup> <a name="retiringPrincipal" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.retiringPrincipal"></a>

```typescript
public readonly retiringPrincipal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retiring_principal KmsGrant#retiring_principal}.

---

### KmsGrantConstraints <a name="KmsGrantConstraints" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.Initializer"></a>

```typescript
import { kmsGrant } from '@cdktf/provider-aws'

const kmsGrantConstraints: kmsGrant.KmsGrantConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.property.encryptionContextEquals">encryptionContextEquals</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#encryption_context_equals KmsGrant#encryption_context_equals}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.property.encryptionContextSubset">encryptionContextSubset</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#encryption_context_subset KmsGrant#encryption_context_subset}. |

---

##### `encryptionContextEquals`<sup>Optional</sup> <a name="encryptionContextEquals" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.property.encryptionContextEquals"></a>

```typescript
public readonly encryptionContextEquals: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#encryption_context_equals KmsGrant#encryption_context_equals}.

---

##### `encryptionContextSubset`<sup>Optional</sup> <a name="encryptionContextSubset" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.property.encryptionContextSubset"></a>

```typescript
public readonly encryptionContextSubset: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#encryption_context_subset KmsGrant#encryption_context_subset}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsGrantConstraintsList <a name="KmsGrantConstraintsList" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer"></a>

```typescript
import { kmsGrant } from '@cdktf/provider-aws'

new kmsGrant.KmsGrantConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.get"></a>

```typescript
public get(index: number): KmsGrantConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KmsGrantConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a>[]

---


### KmsGrantConstraintsOutputReference <a name="KmsGrantConstraintsOutputReference" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer"></a>

```typescript
import { kmsGrant } from '@cdktf/provider-aws'

new kmsGrant.KmsGrantConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resetEncryptionContextEquals">resetEncryptionContextEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resetEncryptionContextSubset">resetEncryptionContextSubset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionContextEquals` <a name="resetEncryptionContextEquals" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resetEncryptionContextEquals"></a>

```typescript
public resetEncryptionContextEquals(): void
```

##### `resetEncryptionContextSubset` <a name="resetEncryptionContextSubset" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resetEncryptionContextSubset"></a>

```typescript
public resetEncryptionContextSubset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextEqualsInput">encryptionContextEqualsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextSubsetInput">encryptionContextSubsetInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextEquals">encryptionContextEquals</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextSubset">encryptionContextSubset</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionContextEqualsInput`<sup>Optional</sup> <a name="encryptionContextEqualsInput" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextEqualsInput"></a>

```typescript
public readonly encryptionContextEqualsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `encryptionContextSubsetInput`<sup>Optional</sup> <a name="encryptionContextSubsetInput" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextSubsetInput"></a>

```typescript
public readonly encryptionContextSubsetInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `encryptionContextEquals`<sup>Required</sup> <a name="encryptionContextEquals" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextEquals"></a>

```typescript
public readonly encryptionContextEquals: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `encryptionContextSubset`<sup>Required</sup> <a name="encryptionContextSubset" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextSubset"></a>

```typescript
public readonly encryptionContextSubset: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsGrantConstraints | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints">KmsGrantConstraints</a> | cdktf.IResolvable

---



