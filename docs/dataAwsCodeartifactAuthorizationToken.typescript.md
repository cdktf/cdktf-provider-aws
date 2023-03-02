# `dataAwsCodeartifactAuthorizationToken` Submodule <a name="`dataAwsCodeartifactAuthorizationToken` Submodule" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodeartifactAuthorizationToken <a name="DataAwsCodeartifactAuthorizationToken" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token aws_codeartifact_authorization_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer"></a>

```typescript
import { dataAwsCodeartifactAuthorizationToken } from '@cdktf/provider-aws'

new dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken(scope: Construct, id: string, config: DataAwsCodeartifactAuthorizationTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig">DataAwsCodeartifactAuthorizationTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig">DataAwsCodeartifactAuthorizationTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetDomainOwner">resetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDomainOwner` <a name="resetDomainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetDomainOwner"></a>

```typescript
public resetDomainOwner(): void
```

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetDurationSeconds"></a>

```typescript
public resetDurationSeconds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isConstruct"></a>

```typescript
import { dataAwsCodeartifactAuthorizationToken } from '@cdktf/provider-aws'

dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformElement"></a>

```typescript
import { dataAwsCodeartifactAuthorizationToken } from '@cdktf/provider-aws'

dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformDataSource"></a>

```typescript
import { dataAwsCodeartifactAuthorizationToken } from '@cdktf/provider-aws'

dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.authorizationToken">authorizationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domainOwnerInput">domainOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.durationSecondsInput">durationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domainOwner">domainOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authorizationToken`<sup>Required</sup> <a name="authorizationToken" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.authorizationToken"></a>

```typescript
public readonly authorizationToken: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domainOwnerInput`<sup>Optional</sup> <a name="domainOwnerInput" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domainOwnerInput"></a>

```typescript
public readonly domainOwnerInput: string;
```

- *Type:* string

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.durationSecondsInput"></a>

```typescript
public readonly durationSecondsInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `domainOwner`<sup>Required</sup> <a name="domainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodeartifactAuthorizationTokenConfig <a name="DataAwsCodeartifactAuthorizationTokenConfig" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.Initializer"></a>

```typescript
import { dataAwsCodeartifactAuthorizationToken } from '@cdktf/provider-aws'

const dataAwsCodeartifactAuthorizationTokenConfig: dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#domain DataAwsCodeartifactAuthorizationToken#domain}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.domainOwner">domainOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#domain_owner DataAwsCodeartifactAuthorizationToken#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#duration_seconds DataAwsCodeartifactAuthorizationToken#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#id DataAwsCodeartifactAuthorizationToken#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#domain DataAwsCodeartifactAuthorizationToken#domain}.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#domain_owner DataAwsCodeartifactAuthorizationToken#domain_owner}.

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#duration_seconds DataAwsCodeartifactAuthorizationToken#duration_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#id DataAwsCodeartifactAuthorizationToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



