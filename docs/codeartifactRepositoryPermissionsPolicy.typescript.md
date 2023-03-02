# `codeartifactRepositoryPermissionsPolicy` Submodule <a name="`codeartifactRepositoryPermissionsPolicy` Submodule" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactRepositoryPermissionsPolicy <a name="CodeartifactRepositoryPermissionsPolicy" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy aws_codeartifact_repository_permissions_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer"></a>

```typescript
import { codeartifactRepositoryPermissionsPolicy } from '@cdktf/provider-aws'

new codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy(scope: Construct, id: string, config: CodeartifactRepositoryPermissionsPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig">CodeartifactRepositoryPermissionsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig">CodeartifactRepositoryPermissionsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetDomainOwner">resetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetPolicyRevision">resetPolicyRevision</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDomainOwner` <a name="resetDomainOwner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetDomainOwner"></a>

```typescript
public resetDomainOwner(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicyRevision` <a name="resetPolicyRevision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetPolicyRevision"></a>

```typescript
public resetPolicyRevision(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct"></a>

```typescript
import { codeartifactRepositoryPermissionsPolicy } from '@cdktf/provider-aws'

codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement"></a>

```typescript
import { codeartifactRepositoryPermissionsPolicy } from '@cdktf/provider-aws'

codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource"></a>

```typescript
import { codeartifactRepositoryPermissionsPolicy } from '@cdktf/provider-aws'

codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwnerInput">domainOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevisionInput">policyRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwner">domainOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevision">policyRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domainOwnerInput`<sup>Optional</sup> <a name="domainOwnerInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwnerInput"></a>

```typescript
public readonly domainOwnerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `policyRevisionInput`<sup>Optional</sup> <a name="policyRevisionInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevisionInput"></a>

```typescript
public readonly policyRevisionInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `domainOwner`<sup>Required</sup> <a name="domainOwner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `policyRevision`<sup>Required</sup> <a name="policyRevision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevision"></a>

```typescript
public readonly policyRevision: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactRepositoryPermissionsPolicyConfig <a name="CodeartifactRepositoryPermissionsPolicyConfig" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.Initializer"></a>

```typescript
import { codeartifactRepositoryPermissionsPolicy } from '@cdktf/provider-aws'

const codeartifactRepositoryPermissionsPolicyConfig: codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyDocument">policyDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domainOwner">domainOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyRevision">policyRevision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}.

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyRevision`<sup>Optional</sup> <a name="policyRevision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyRevision"></a>

```typescript
public readonly policyRevision: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}.

---



