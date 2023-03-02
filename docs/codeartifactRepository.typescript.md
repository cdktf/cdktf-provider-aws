# `codeartifactRepository` Submodule <a name="`codeartifactRepository` Submodule" id="@cdktf/provider-aws.codeartifactRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactRepository <a name="CodeartifactRepository" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository aws_codeartifact_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer"></a>

```typescript
import { codeartifactRepository } from '@cdktf/provider-aws'

new codeartifactRepository.CodeartifactRepository(scope: Construct, id: string, config: CodeartifactRepositoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig">CodeartifactRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig">CodeartifactRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putExternalConnections">putExternalConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putUpstream">putUpstream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetDomainOwner">resetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetExternalConnections">resetExternalConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetUpstream">resetUpstream</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putExternalConnections` <a name="putExternalConnections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putExternalConnections"></a>

```typescript
public putExternalConnections(value: CodeartifactRepositoryExternalConnections): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putExternalConnections.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

---

##### `putUpstream` <a name="putUpstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putUpstream"></a>

```typescript
public putUpstream(value: IResolvable | CodeartifactRepositoryUpstream[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putUpstream.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainOwner` <a name="resetDomainOwner" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetDomainOwner"></a>

```typescript
public resetDomainOwner(): void
```

##### `resetExternalConnections` <a name="resetExternalConnections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetExternalConnections"></a>

```typescript
public resetExternalConnections(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUpstream` <a name="resetUpstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetUpstream"></a>

```typescript
public resetUpstream(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isConstruct"></a>

```typescript
import { codeartifactRepository } from '@cdktf/provider-aws'

codeartifactRepository.CodeartifactRepository.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformElement"></a>

```typescript
import { codeartifactRepository } from '@cdktf/provider-aws'

codeartifactRepository.CodeartifactRepository.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformResource"></a>

```typescript
import { codeartifactRepository } from '@cdktf/provider-aws'

codeartifactRepository.CodeartifactRepository.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.administratorAccount">administratorAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnections">externalConnections</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference">CodeartifactRepositoryExternalConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstream">upstream</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList">CodeartifactRepositoryUpstreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwnerInput">domainOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnectionsInput">externalConnectionsInput</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstreamInput">upstreamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwner">domainOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `administratorAccount`<sup>Required</sup> <a name="administratorAccount" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.administratorAccount"></a>

```typescript
public readonly administratorAccount: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `externalConnections`<sup>Required</sup> <a name="externalConnections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnections"></a>

```typescript
public readonly externalConnections: CodeartifactRepositoryExternalConnectionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference">CodeartifactRepositoryExternalConnectionsOutputReference</a>

---

##### `upstream`<sup>Required</sup> <a name="upstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstream"></a>

```typescript
public readonly upstream: CodeartifactRepositoryUpstreamList;
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList">CodeartifactRepositoryUpstreamList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domainOwnerInput`<sup>Optional</sup> <a name="domainOwnerInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwnerInput"></a>

```typescript
public readonly domainOwnerInput: string;
```

- *Type:* string

---

##### `externalConnectionsInput`<sup>Optional</sup> <a name="externalConnectionsInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnectionsInput"></a>

```typescript
public readonly externalConnectionsInput: CodeartifactRepositoryExternalConnections;
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `upstreamInput`<sup>Optional</sup> <a name="upstreamInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstreamInput"></a>

```typescript
public readonly upstreamInput: IResolvable | CodeartifactRepositoryUpstream[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `domainOwner`<sup>Required</sup> <a name="domainOwner" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactRepositoryConfig <a name="CodeartifactRepositoryConfig" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.Initializer"></a>

```typescript
import { codeartifactRepository } from '@cdktf/provider-aws'

const codeartifactRepositoryConfig: codeartifactRepository.CodeartifactRepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain CodeartifactRepository#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository CodeartifactRepository#repository}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#description CodeartifactRepository#description}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domainOwner">domainOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.externalConnections">externalConnections</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | external_connections block. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#id CodeartifactRepository#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags CodeartifactRepository#tags}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags_all CodeartifactRepository#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.upstream">upstream</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>[]</code> | upstream block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain CodeartifactRepository#domain}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository CodeartifactRepository#repository}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#description CodeartifactRepository#description}.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}.

---

##### `externalConnections`<sup>Optional</sup> <a name="externalConnections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.externalConnections"></a>

```typescript
public readonly externalConnections: CodeartifactRepositoryExternalConnections;
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

external_connections block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connections CodeartifactRepository#external_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#id CodeartifactRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags CodeartifactRepository#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags_all CodeartifactRepository#tags_all}.

---

##### `upstream`<sup>Optional</sup> <a name="upstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.upstream"></a>

```typescript
public readonly upstream: IResolvable | CodeartifactRepositoryUpstream[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>[]

upstream block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#upstream CodeartifactRepository#upstream}

---

### CodeartifactRepositoryExternalConnections <a name="CodeartifactRepositoryExternalConnections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections.Initializer"></a>

```typescript
import { codeartifactRepository } from '@cdktf/provider-aws'

const codeartifactRepositoryExternalConnections: codeartifactRepository.CodeartifactRepositoryExternalConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections.property.externalConnectionName">externalConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connection_name CodeartifactRepository#external_connection_name}. |

---

##### `externalConnectionName`<sup>Required</sup> <a name="externalConnectionName" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections.property.externalConnectionName"></a>

```typescript
public readonly externalConnectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connection_name CodeartifactRepository#external_connection_name}.

---

### CodeartifactRepositoryUpstream <a name="CodeartifactRepositoryUpstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream.Initializer"></a>

```typescript
import { codeartifactRepository } from '@cdktf/provider-aws'

const codeartifactRepositoryUpstream: codeartifactRepository.CodeartifactRepositoryUpstream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream.property.repositoryName">repositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository_name CodeartifactRepository#repository_name}. |

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository_name CodeartifactRepository#repository_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodeartifactRepositoryExternalConnectionsOutputReference <a name="CodeartifactRepositoryExternalConnectionsOutputReference" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer"></a>

```typescript
import { codeartifactRepository } from '@cdktf/provider-aws'

new codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.packageFormat">packageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionNameInput">externalConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionName">externalConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packageFormat`<sup>Required</sup> <a name="packageFormat" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.packageFormat"></a>

```typescript
public readonly packageFormat: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `externalConnectionNameInput`<sup>Optional</sup> <a name="externalConnectionNameInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionNameInput"></a>

```typescript
public readonly externalConnectionNameInput: string;
```

- *Type:* string

---

##### `externalConnectionName`<sup>Required</sup> <a name="externalConnectionName" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionName"></a>

```typescript
public readonly externalConnectionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodeartifactRepositoryExternalConnections;
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

---


### CodeartifactRepositoryUpstreamList <a name="CodeartifactRepositoryUpstreamList" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer"></a>

```typescript
import { codeartifactRepository } from '@cdktf/provider-aws'

new codeartifactRepository.CodeartifactRepositoryUpstreamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.get"></a>

```typescript
public get(index: number): CodeartifactRepositoryUpstreamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeartifactRepositoryUpstream[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>[]

---


### CodeartifactRepositoryUpstreamOutputReference <a name="CodeartifactRepositoryUpstreamOutputReference" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer"></a>

```typescript
import { codeartifactRepository } from '@cdktf/provider-aws'

new codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodeartifactRepositoryUpstream | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a> | cdktf.IResolvable

---



