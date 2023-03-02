# `dataAwsEcrAuthorizationToken` Submodule <a name="`dataAwsEcrAuthorizationToken` Submodule" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcrAuthorizationToken <a name="DataAwsEcrAuthorizationToken" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token aws_ecr_authorization_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer"></a>

```typescript
import { dataAwsEcrAuthorizationToken } from '@cdktf/provider-aws'

new dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken(scope: Construct, id: string, config?: DataAwsEcrAuthorizationTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig">DataAwsEcrAuthorizationTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig">DataAwsEcrAuthorizationTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetRegistryId">resetRegistryId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegistryId` <a name="resetRegistryId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.resetRegistryId"></a>

```typescript
public resetRegistryId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isConstruct"></a>

```typescript
import { dataAwsEcrAuthorizationToken } from '@cdktf/provider-aws'

dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformElement"></a>

```typescript
import { dataAwsEcrAuthorizationToken } from '@cdktf/provider-aws'

dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformDataSource"></a>

```typescript
import { dataAwsEcrAuthorizationToken } from '@cdktf/provider-aws'

dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.authorizationToken">authorizationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.proxyEndpoint">proxyEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.registryIdInput">registryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authorizationToken`<sup>Required</sup> <a name="authorizationToken" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.authorizationToken"></a>

```typescript
public readonly authorizationToken: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `proxyEndpoint`<sup>Required</sup> <a name="proxyEndpoint" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.proxyEndpoint"></a>

```typescript
public readonly proxyEndpoint: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `registryIdInput`<sup>Optional</sup> <a name="registryIdInput" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.registryIdInput"></a>

```typescript
public readonly registryIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcrAuthorizationTokenConfig <a name="DataAwsEcrAuthorizationTokenConfig" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.Initializer"></a>

```typescript
import { dataAwsEcrAuthorizationToken } from '@cdktf/provider-aws'

const dataAwsEcrAuthorizationTokenConfig: dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token#id DataAwsEcrAuthorizationToken#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.registryId">registryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token#registry_id DataAwsEcrAuthorizationToken#registry_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token#id DataAwsEcrAuthorizationToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registryId`<sup>Optional</sup> <a name="registryId" id="@cdktf/provider-aws.dataAwsEcrAuthorizationToken.DataAwsEcrAuthorizationTokenConfig.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token#registry_id DataAwsEcrAuthorizationToken#registry_id}.

---



